
from flask import Flask
from flask_pymongo import PyMongo
from pymongo import MongoClient

client = MongoClient()


app = Flask(__name__)
app.config["MONGO_URI"] = ("mongodb+srv://maxbuehler:728inPJAQPQ4Y6qh"
                           "@canban-board.k5nwe.mongodb.net/"
                           "?retryWrites=true&w=majority&appName=Canban-Board")
mongo = PyMongo(app)
