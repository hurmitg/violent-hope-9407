const express = require('express');
const { getCartProducts, addToCart, updateInCart, deletFromCart } = require('../controllers/cart.controller');
const { protect } = require('../middlewares/auth.middleware')

const router = express.Router();

router
    .route("/")
    .get(protect,getCartProducts)
    .post(protect,addToCart)
    .put(protect,updateInCart)

 router.route("/:id").delete(protect,deletFromCart)

    module.exports = router

