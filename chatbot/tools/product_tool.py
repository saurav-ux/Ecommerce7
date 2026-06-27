import json
import os
import sys

from langchain.tools import tool

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)

from database import products_collection


@tool
def search_products(
    category: str = "",
    color: str = "",
    brand: str = "",
    max_price: int | None = None,
):
    """
    Search products from MongoDB.
    """

    query = {}

    if category:
        query["category"] = {"$regex": category, "$options": "i"}

    if color:
        query["color"] = {"$regex": color, "$options": "i"}

    if brand:
        query["brand"] = {"$regex": brand, "$options": "i"}

    if max_price:
        query["price"] = {"$lte": max_price}

    products = list(products_collection.find(query, {"_id": 0, "__v": 0}).limit(10))

    return json.dumps(products, default=str, ensure_ascii=False)


# result = search_products.invoke({"category": "Ethnic Wear", "color": "White"})

# print(result)
