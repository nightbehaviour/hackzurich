from flask import Flask, render_template, jsonify
import app.sbbHackClass as sbbHackClass
from random import *

application = app = Flask(__name__,
        static_folder="./dist/static",
        template_folder="./dist")

# Api endpoint
@app.route('/api/get-offers')

def get_offers():
    # travel_date = '2019-10-27'
    # travel_time = '10:00'
    # travel_dest_name = 'Bern'
    # travel_orig_name = 'Zurich'
    request1 = sbbHackClass.SurpriseRequest()
    response = request1.go_for_offer()
    return jsonify(response)

# eof fake api endpoint
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


if __name__ == '__main__':
    application.run(debug=True)
