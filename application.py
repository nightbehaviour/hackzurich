from flask import Flask, render_template, jsonify
from random import *
application = app = Flask(__name__,
            static_folder = "./dist/static",
            template_folder = "./dist")
@app.route('/api/random')
def random_number():
    response = {
        'randomNumber': randint(1, 100)
    }
    return jsonify(response)

#fake api endpoint
@app.route('/api/get-offers')
def get_fake_offers():
    response = {
        'destination': 'Bern',
        'origin': 'Zürich'
    }
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
