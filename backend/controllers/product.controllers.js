const asyncHandler = require("express-async-handler");
const ProductModel = require("../models/product.model");

/**
 * Gets the products that match the given parameters.
 */
const getProducts = asyncHandler(async (req, res) => {
  const params = req.query;
  if (!params)
    return res.status(401).send({ message: "Please Enter Queries." });

  let products = await ProductModel.find(params);
  if (products) return res.status(200).send(products);

  res.status(400).send({ message: "Failed" });
});

module.exports = { getProducts };
