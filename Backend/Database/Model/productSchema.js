import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    // Existing fields (unchanged)
    off: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    cutprice: {
      type: Number,
      required: true,
    },

    imgName: {
      type: String,
      required: true,
    },

    // New fields for Product Search Agent
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "",
    },

    size: {
      type: String,
      default: "",
    },

    stock: {
      type: Number,
      default: 0,
    },

    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

const ProducrData = mongoose.model("ProducrData", productSchema);

export default ProducrData;
