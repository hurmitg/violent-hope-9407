const asyncHandler = require("express-async-handler");
const Cart = require("../models/cart.model");

const getCartProducts = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    let cartProducts = await Cart.findOne({ user: _id });
    console.log("cart", cartProducts);
    // res.json({ products: cartProducts.cartItems });
    res.json(cartProducts);
  });

  module.exports={getCartProducts}