const express = require('express');
const { getCartProducts, addToCart, updateInCart,deletFromCart } = require('../controllers/cart.controller');
const { protect } = require('../middlewares/auth.middleware')

const router = express.Router();

router
    .route("/")
    .get(protect,getCartProducts)
    .post(protect,addToCart)
    .patch(protect,updateInCart)

    router.post("/remove",protect,deletFromCart)


module.exports = router

