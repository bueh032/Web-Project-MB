
from flask import Flask,jsonify
from flask_pymongo import PyMongo
from pymongo import MongoClient
from flask_cors import CORS

client = MongoClient()


app = Flask(__name__)
app.config["MONGO_URI"] = ("mongodb+srv://maxbuehler:728inPJAQPQ4Y6qh"
                           "@canban-board.k5nwe.mongodb.net/"
                           "?retryWrites=true&w=majority&appName=Canban-Board")
mongo = PyMongo(app)
CORS(app)

@app.route('/app/home')
def method_name():
    pass
def return_home():
    return jsonify ({
        'message: Hello World!'
    })

if __name__ == "__main__":
    app.run(debug=True, host='localhost')