from flask import Flask, render_template, jsonify
import app.sbbHackClass as sbbHackClass
from random import *
application = app = Flask(__name__,
            static_folder="./dist/static",
            template_folder="./dist")

@app.route('/api/random')
def random_number():
    response = {
        'randomNumber': randint(1, 100)
    }
    return jsonify(response)

# fake api endpoint
@app.route('/api/get-fake-offers')
def get_fake_offers():
    response = {
        'destination': 'Bern',
        'origin': 'Zürich'
    }
    return jsonify(response)

# real api endpoint
@app.route('/api/get-offers')

def get_offers():
    travel_date = '2019-10-27'
    travel_time = '10:00'
    travel_dest_name = 'Bern'
    travel_orig_name = 'Zurich'
    request1 = sbbHackClass.SurpriseRequest()
    response = request1.go_for_offer()
    return jsonify(response)

# eof fake api endpoint
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")

#if __name__ == "__main__":
    #application.run(host='0.0.0.0',port=8080,debug=True)
if __name__ == '__main__':
    application.run(debug=True)
