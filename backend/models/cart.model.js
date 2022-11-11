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
          brand: { type: String, required: true },
          title: { type: String, required: true },
          image: { type: String, required: true },
          description: { type: String, required: true },
          type: { type: String, required: true },
          category: { type: String, required: true },
          price: { type: Number, required: true },
          products: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
        },




        // name: { type: String, required: true },
        // quantity: { type: String, required: true },
        // image: { type: String, required: true },
        // price: { type: String, required: true },
        // products: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   required: true,
        //   ref: "Product",
        // },
      
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;