const asyncHandler = require("express-async-handler");
const Cart = require("../models/cart.model");

// const getCartProducts = asyncHandler(async (req, res) => {
//     const { _id } = req.user;
//     let cartProducts = await Cart.findOne({ user: _id })
//     console.log("cart", cartProducts);
//     res.json(cartProducts);
//   });


  // const deletFromCart = asyncHandler(async (req, res) => {

  //   const {cartItems} = await Cart.findOne({user: req.user._id})


  //   let afterUpdating = cartItems.filter((el)=>el.product !== req.params.id)

  //   finalUpdate = await Cart.findByIdAndUpdate({user: req.user._id},{cartItems:afterUpdating})

  //   res.json({message: "Product removed from cart",data:finalUpdate})


  // })


//   const addToCart = asyncHandler(async (req, res) => {
//     // Cart.findOne({user: req.user._id}).exec((error,cart)=>{
//     //   if (error) return res.status(400).json({ error });
//       let itemTobeAdded = req.body

//       console.log(req.body)
//       const checkUser = await Cart.findOne({ user: req.user._id})
//       if(!checkUser){
//           const cart = await Cart.create({user: req.user, cartItems :itemTobeAdded })
//           console.log(cart)
//           // const newCart = 
//           // await cart.save();
//           res.send({message: "Product added in the cart",product:cart})
//       }else{
//         let afterUpdating;
//         let finalUpdate;
//         let {cartItems} = checkUser

//         let checkforItem =  cartItems.find((el)=>el.product === itemTobeAdded.product)

//         if(checkforItem===undefined){
//           afterUpdating = [...cartItems,itemTobeAdded]
//         }else{

//           finalUpdate = await Cart.findByIdAndUpdate({user: req.user._id},{cartItems:afterUpdating})
//         }


//       //   for(let i=0; i<itemTobeAdded.length; i++){
//       //     const {product} = itemTobeAdded[i]
//       //     const ifPresent = cartItems.find((item)=>item.product===product)
        

//       //   if(!ifPresent){
//       //     afterUpdating = [...cartItems,itemTobeAdded[i]]
//       //   }else{
//       //     afterUpdating = cartItems.map((el)=>{
//       //       if(el.product===product){
//       //         el.quantity = Number(itemTobeAdded[i])
//       //         return el;
//       //       }else{
//       //         return el;
//       //       }
//       //     })
//       //   }

//       //   finalUpdate = await Cart.findByIdAndUpdate({user: req.user._id},{cartItems:afterUpdating})

//       // }
//       res.json({ message: "Product added to cart", data: finalUpdate });
//     }
// })

const getCartProducts = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  let cartProducts = await Cart.find({ user: _id }).populate({path:"cartItems",populate: {path:"product"}})
  // console.log("cart", cartProducts);
  res.send(cartProducts);
});




//   const addToCart = asyncHandler(async (req, res) => {
      
//       const {cartItems} = req.body
//       const newCart = {user: req.user, cartItems: cartItems}

//       const cart = await Cart.create(newCart)
//       // const fullcart = await Cart.findOne({_id: cart._id}).populate("cartItems")

//       const fullcart = await Cart.findOne({_id: cart._id}).populate({path:"cartItems",populate: {path:"product"}})



//       res.send({ message: "Product added to cart", data: fullcart });
    
// })


const addToCart = asyncHandler(async (req, res) => {
    
  
  try{
    const {cartItems} = req.body
    const newCart = {user: req.user, cartItems: cartItems}
    const cart = await Cart.create(newCart)
    const fullcart = await Cart.findOne({_id: cart._id}).populate({path:"cartItems",populate: {path:"product"}})
   return res.send({ message: "Product added to cart", data: fullcart });
  }catch(err){
    return res.send(console.error)
  }
  const {cartItems} = req.body
  const newCart = {user: req.user, cartItems: cartItems}

  const checkUser = await Cart.findOne({ user: req.user._id})

  if(!checkUser){


  }

  const cart = await Cart.create(newCart)
  // const fullcart = await Cart.findOne({_id: cart._id}).populate("cartItems")

  const fullcart = await Cart.findOne({_id: cart._id}).populate({path:"cartItems",populate: {path:"product"}})



  res.send({ message: "Product added to cart", data: fullcart });

})



const deletFromCart = asyncHandler(async (req, res) => {

        try {
          let cartProducts = await Cart.findOne({ user: req.user._id }).populate({path:"cartItems",populate: {path:"product"}})
        const { id } = req.params;
        await cartProducts.findByIdAndRemove(id);
      } catch (error) {
        console.log(error.message);
      }
})

const updateInCart = asyncHandler(async (req, res) => {
    let cartProducts = await Cart.find({ user: req.user._id }).populate({path:"cartItems",populate: {path:"product"}})

});


module.exports={getCartProducts,deletFromCart,addToCart}
