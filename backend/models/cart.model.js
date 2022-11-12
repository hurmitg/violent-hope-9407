const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    cartItems: [
          {
            product:{ 
              type: mongoose.Schema.Types.ObjectId,
              ref: "Product",
            },
            quantity: {type :Number, required:true}
          }  
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;