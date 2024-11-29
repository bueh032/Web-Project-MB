import os
from flask import Flask
from flask_pymongo import PyMongo
from pymongo import MongoClient

client = MongoClient()
os.environ["MONGO_USERNAME"] = "maxbuehler"
os.environ["MONGO_PASSWORD"] = "728inPJAQPQ4Y6qh"
os.environ["MONGO_CLUSTER_URL"] = "canban-board.k5nwe.mongodb.net"

username = os.getenv["MONGO_USERNAME"]
password = os.getenv["MONGO_PASSWORD"]
cluster_url = os.getenv["MONGO_CLUSTER_URL"]

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://<username>:<password>@<cluster_url>/?retryWrites=true&w=majority&appName=Canban-Board"
mongo = PyMongo(app)
