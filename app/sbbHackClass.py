from datetime import timedelta
import requests
import json
import dateparser


"""Get the access token and set headers"""

data = {'grant_type': 'client_credentials',
        'client_id': '22ebc2be',
        'client_secret': '2c820784f3e28837959abc43120989ca'}

response = requests.post('https://sso-int.sbb.ch/auth/realms/SBB_Public/protocol/openid-connect/token', data=data)

# Parse Token
response_dict = json.loads(response.text)
access_token = response_dict['access_token']
X_Contract_Id = 'cafebabe-0815-4711-1234-ffffdeadbeef'

# Set headers
headers = {
    'Accept': '*/*',
    'Accept-Language': 'de',
    'X-Contract-Id': 'HAC222P',
    'X-Conversation-Id': X_Contract_Id,
    'Authorization': 'Bearer ' + access_token,
}


travel_date = '2019-10-27'
travel_time = '10:00'
travel_dest_name = 'Bern'
travel_orig_name = 'Basel'


class SurpriseRequest:
    """ Class for a surprise trip request."""

    def __init__(self,
                 trainType='IR;ICE/TGV/RJ,EC/IC',
                 arrivalDeparture='ED',
                 ipExtensionTicket='false',
                 passengers='paxa;42;half-fare',
                 X_Contract_Id=X_Contract_Id,
                 access_token=access_token):
        """ Initialize Surprise Request instance."""

        self._trainType = trainType
        self._arrivalDeparture = arrivalDeparture
        self._ipExtensionTicket = ipExtensionTicket
        self._passengers = passengers
        self._X_contract_Id = X_Contract_Id
        self._access_token = access_token

    # def __repr__(self):
    #     """Function to output the characteristics of the instance."""

    #     date = str('date ' + self._travel_date)
    #     time = str('time ' + self._travel_time)
    #     orig = str('origin ' + self._travel_orig_name)

    #     return str(date + " / " + time + " / " + orig)

    def go_for_offers(self,
                      travel_date=travel_date,
                      travel_time=travel_time,
                      travel_orig_name=travel_orig_name):
        """Query different destinations to get valid offer prices."""

        self._travel_date = travel_date
        self._travel_time = travel_time
        self._travel_orig_name = travel_orig_name

        price_dicts = []
        destinations_list = ['Bern', 'Montreux',]
        for destination in destinations_list:
            price_dict = self.go_for_offer(travel_dest_name=destination)
            price_dicts.append(price_dict)

        return price_dicts

    def go_for_offer(self, travel_dest_name):
        """Chain many functions to return a price (offer or not)."""

        self._travel_dest_name = travel_dest_name

        self.get_location_ids()
        self.get_start_trip_id()
        self.get_return_trip_id()
        self.get_offers()
        return self.return_offer_price()

    def get_location_ids(self):
        """Get the location ids from the name inputs."""

        loc_id_list = []
        for location in [self._travel_dest_name, self._travel_orig_name]:
            loc_params = (
                ('name', location),
            )

            loc_data = requests.get('https://b2p-int.api.sbb.ch/api/locations',
                                    headers=headers, params=loc_params)
            loc_data_list = json.loads(loc_data.text)
            loc_id = loc_data_list[0]['id']
            loc_id_list.append(loc_id)

        self._travel_dest = loc_id_list[0]
        self._travel_orig = loc_id_list[1]

    def get_start_trip_id(self):
        """Get the initial journey Id."""

        start_trip_params = (
            ('arrivalDeparture', self._arrivalDeparture),
            ('date', self._travel_date),
            ('destinationId', self._travel_dest),
            ('originId', self._travel_orig),
            ('time', self._travel_time),
            ('trainType', self._trainType),
        )

        start_trip = requests.get('https://b2p-int.api.sbb.ch/api/trips',
                                  headers=headers, params=start_trip_params)
        start_trip_as_list = json.loads(start_trip.text)

        self._start_trip_id = start_trip_as_list[0]['tripId']

    def get_return_trip_id(self, delta_hours=5):
        """Get the initial journey Id."""
        self._deta_hours = delta_hours

        datetime_travel = dateparser.parse(travel_date + ',' + travel_time)
        datetime_return = datetime_travel + timedelta(hours=delta_hours)
        return_time = str(datetime_return.time())[:-3]

        return_trip_params = (
            ('arrivalDeparture', self._arrivalDeparture),
            ('date', self._travel_date),
            ('destinationId', self._travel_orig),
            ('originId', self._travel_dest),
            ('time', return_time),
            ('trainType', self._trainType),
        )

        return_trip = requests.get('https://b2p-int.api.sbb.ch/api/trips',
                                   headers=headers, params=return_trip_params)
        return_trip_as_list = json.loads(return_trip.text)

        self._return_trip_id = return_trip_as_list[0]['tripId']

    def get_offers(self):
        """Get price offer for full itinerary."""

        offer_params = (
            ('ipExtensionTicket', self._ipExtensionTicket),
            ('passengers', self._passengers),
            ('returnTripId', self._return_trip_id),  
            ('tripId', self._start_trip_id),
        )

        offer = requests.get('https://b2p-int.api.sbb.ch/api/trip-offers',
                              headers=headers, params=offer_params)
        self._offer_as_list = json.loads(offer.text) 

        product_id_list = []
        for offer in self._offer_as_list:
            product_id = offer['offers'][0]['productId']
            product_id_list.append(product_id)
            if product_id == 4004:
                break

        if 4004 in set(product_id_list):
            for offer in self._offer_as_list:
                if offer['offers'][0]['productId'] == 4004:
                    self._offer_price = offer['offers'][0]['price'] * 2
                    break

            for offer in self._offer_as_list:
                if offer['offers'][0]['productId'] == 125:
                    self._full_price = offer['offers'][0]['price'] * 2
                    break
        else:
            self._offer_price = "no supersaver"

        print(self._offer_price)

    def return_offer_price(self):
        """Return an offer price if both trips have Supersaver Price."""

        if isinstance(self._offer_price, str):
            print(True)

            return {'offer_price': None,
                    'rebate': None,
                    'rebate_pct': None,
                    'destination': self._travel_dest_name,
                    }

        else:
            self._rebate = self._full_price - self._offer_price
            self._rebate_ptc = round(self._rebate / self._full_price, 2)

            return {'offer_price': self._offer_price,
                    'rebate': self._rebate,
                    'rebate_pct': self._rebate_ptc,
                    'destination': self._travel_dest_name,
                    'start_trip_id': self._start_trip_id,
                    'return_trip_id': self._return_trip_id,
                    'X-Contract-Id': self._X_contract_Id,
                    'access_token': self._access_token,
                    }
