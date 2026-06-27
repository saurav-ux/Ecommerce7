import express from "express";
const product4Route = express.Router();
import Product4Data from "../product4Schema.js";

product4Route.post("/", async (req, res) => {
  try {
    const addData = Product4Data(req.body);
    await addData.save();
    res.status(200).send(true);
  } catch (error) {
    res.status(500).send("Internal Server Errors: ", error);
  }
});

product4Route.get("/", async (req, res) => {
  try {
    res.status(200).send(await Product4Data.find({}));
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error);
  }
});

// Bulk insert route
product4Route.post("/bulk", async (req, res) => {
  try {
    // Ensure that the incoming data is actually an array
    if (!Array.isArray(req.body)) {
      return res
        .status(400)
        .send("Invalid format: Expected an array of products.");
    }

    // Inserts all elements of the array into the database at once
    const addedData = await Product4Data.insertMany(req.body);

    // Returns a success flag and the count of inserted documents
    res.status(200).json({ success: true, count: addedData.length });
  } catch (error) {
    res.status(500).send("Internal Server Error: " + error.message);
  }
});

// Filter Products API
product4Route.get("/filter", async (req, res) => {
  try {
    const { category, color, brand, size, minPrice, maxPrice, search } =
      req.query;

    const query = {};

    if (category) {
      query.category = new RegExp(category, "i");
    }

    if (color) {
      query.color = new RegExp(color, "i");
    }

    if (brand) {
      query.brand = new RegExp(brand, "i");
    }

    if (size) {
      query.size = new RegExp(size, "i");
    }

    // Price Filter
    if (minPrice || maxPrice) {
      query.price = {};

      if (minPrice) {
        query.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        query.price.$lte = Number(maxPrice);
      }
    }

    // Search by name or description
    if (search) {
      query.$or = [
        { name: new RegExp(search, "i") },
        { description: new RegExp(search, "i") },
      ];
    }

    const products = await Product4Data.find(query);

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default product4Route;
