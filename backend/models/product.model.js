const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    brand: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;
