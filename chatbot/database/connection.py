import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.getenv("DATABASE"))

db = client["test"]

products_collection = db["product4datas"]
