import requests
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import app.sbbHackClass as sbbHackClass
from random import *

application = app = Flask(__name__,
        static_folder="./dist/static",
        template_folder="./dist")
CORS(application)

# Api endpoint
@app.route('/api/get-offers', methods=['GET', 'POST'])

def get_the_offers():

    travel_date = '2019-10-27'
    travel_time = '10:00'
    travel_orig_name = 'Zurich'

    s_request = sbbHackClass.SurpriseRequest()
    response = s_request.go_for_offers(travel_date,
                                       travel_time,
                                       travel_orig_name)
    return jsonify(response)

# eof fake api endpoint
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


if __name__ == '__main__':
    application.run(debug=True)
