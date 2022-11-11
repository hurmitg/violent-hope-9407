const asyncHandler = require("express-async-handler");
const Cart = require("../models/cart.model");

const getCartProducts = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    let cartProducts = await Cart.findOne({ user: _id });
    console.log("cart", cartProducts);
    res.json(cartProducts);
  });



  const addToCart = asyncHandler(async (req, res) => {
      // Cart.findOne({user: req.user._id}).exec((error,cart)=>{
      //   if (error) return res.status(400).json({ error });
        let itemTobeAdded = req.body
        const checkUser = await Cart.findOne({ user: req.user._id})
        if(!checkUser){
            const cart = new Cart({user: req.user._id, cartItems :itemTobeAdded })
            const newCart = await cart.save();
            res.json({message: "Product added in the cart",product:newCart})
        }else{
          let afterUpdating;
          let finalUpdate;
          let {cartItems} = checkUser

          let checkforItem =  cartItems.find((el)=>el.product === itemTobeAdded.product)

          if(checkforItem===undefined){
            afterUpdating = [...cartItems,itemTobeAdded]
          }else{

            finalUpdate = await Cart.findByIdAndUpdate({user: req.user._id},{cartItems:afterUpdating})
          }


        //   for(let i=0; i<itemTobeAdded.length; i++){
        //     const {product} = itemTobeAdded[i]
        //     const ifPresent = cartItems.find((item)=>item.product===product)
          

        //   if(!ifPresent){
        //     afterUpdating = [...cartItems,itemTobeAdded[i]]
        //   }else{
        //     afterUpdating = cartItems.map((el)=>{
        //       if(el.product===product){
        //         el.quantity = Number(itemTobeAdded[i])
        //         return el;
        //       }else{
        //         return el;
        //       }
        //     })
        //   }

        //   finalUpdate = await Cart.findByIdAndUpdate({user: req.user._id},{cartItems:afterUpdating})

        // }
        res.json({ message: "Product added to cart", data: finalUpdate });
      }
  })


  const deletFromCart = asyncHandler(async (req, res) => {

    const {cartItems} = await Cart.findOne({user: req.user._id})


    let afterUpdating = cartItems.filter((el)=>el.product !== req.params.id)

    finalUpdate = await Cart.findByIdAndUpdate({user: req.user._id},{cartItems:afterUpdating})

    res.json({message: "Product removed from cart",data:finalUpdate})


  })


  const updateInCart = asyncHandler(async (req, res) => {
    const {cartItems} = await Cart.findOne({user: req.user._id})
    const itemTobeUpdated = req.body

    let afterUpdating;

    for(let i=0; i<itemTobeUpdated.length; i++) {
        afterUpdating = cartItems.map((el)=>{
          if(el.product === itemTobeUpdated[i]){
            el.quantity = +1
            return el;
          }else{
            return el;
          }
        })
    }

    const finalUpdate = await Cart.findByIdAndUpdate({user: req.user._id},{cartItems:afterUpdating})

    res.json({message:"Product added in the cart", data: finalUpdate})
  })

  module.exports={getCartProducts,addToCart,deletFromCart,updateInCart}