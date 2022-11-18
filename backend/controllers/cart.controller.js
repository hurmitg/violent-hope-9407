const asyncHandler = require("express-async-handler");
const Cart = require("../models/cart.model");

/**
 * Get the cart products for the current user.
 */
const getCartProducts = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  let cartProducts = await Cart.find({ user: _id }).populate({
    path: "cartItems",
    populate: { path: "product" },
  });
  return res.send(cartProducts);
});

/**
 * Adds a product to the user's cart.
 */
const addToCart = asyncHandler(async (req, res) => {
  try {
    const checkUserInCart = await Cart.findOne({ user: req.user });

    if (!checkUserInCart) {
      const { cartItems } = req.body;
      const newCart = { user: req.user, cartItems: cartItems };
      const cart = await Cart.create(newCart);
      const fullcart = await Cart.findOne({ _id: cart._id }).populate({
        path: "cartItems",
        populate: { path: "product" },
      });
      return res.send({ message: "Product added to cart", data: fullcart });
    } else {
      const { cartItems } = req.body;

      const newCart = checkUserInCart.cartItems;

      const xyz = await Cart.updateMany(
        { _id: checkUserInCart._id },
        { $push: { cartItems: cartItems } }
      );
      const fullcart = await Cart.findOne({
        _id: checkUserInCart._id,
      }).populate({ path: "cartItems", populate: { path: "product" } });
      return res.send({ fullcart });
    }
  } catch (err) {
    return res.send(console.error);
  }
});

/**
 * Deletes a product from the cart.
 */
const deletFromCart = asyncHandler(async (req, res) => {
  try {
    const { cartProID } = req.body;
    let cartProducts = await Cart.findOne({ user: req.user._id });

    const xyz = await Cart.updateMany(
      { _id: cartProducts._id },
      { $pull: { cartItems: { _id: cartProID } } }
    );

    res.send({ message: " product deleted" });
  } catch (error) {
    res.status(400).send({ message: "Something went wrong" });
  }
});

/**
 * Updates the quantity of a product in the cart.
 */
const updateInCart = asyncHandler(async (req, res) => {
  const { qty, proId } = req.body;
  // console.log(qty,proId)
  let cartProducts = await Cart.findOne({ user: req.user._id }).populate({
    path: "cartItems",
    populate: { path: "product" },
  });
  let newarry = cartProducts.cartItems.map((el) => {
    if (el.id === proId) {
      el.quantity = qty;
    }
    return el;
  });

  const xyz = await Cart.updateOne(
    { _id: cartProducts._id, "cartItems._id": proId },
    { $set: { "cartItems.$.quantity": qty } }
  );
  // console.log(xyz)

  const fullcart = await Cart.findOne({ user: req.user._id }).populate({
    path: "cartItems",
    populate: { path: "product" },
  });

  return res.send(fullcart);
});

module.exports = { getCartProducts, deletFromCart, addToCart, updateInCart };
