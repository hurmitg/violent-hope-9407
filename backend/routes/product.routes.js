const { default: axios } = require("axios");
const express = require("express");
const { getProducts } = require("../controllers/product.controllers");
const { protect } = require("../middlewares/auth.middleware");

const product = express.Router();

// product.route("/").get(protect, allProducts);

product.get("/", getProducts);

product.get("/women", getProducts);

product.get("/kids", getProducts);

module.exports = product;
