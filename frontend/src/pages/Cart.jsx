import {
  Box,
  Button,
Container,
Divider,
HStack,
Image,
Table,
TableCaption,
TableContainer,
Tbody,
Td,
Text,
Tfoot,
Th,
Thead,
Tr,
VStack,
} from "@chakra-ui/react";
import { CloseIcon, EmailIcon } from "@chakra-ui/icons"
import {AiOutlineHeart} from "react-icons/ai"
import React from "react";
// import CartCard from "../components/CartCard";

// import Cartmisc from "../components/Cartmisc";
// import Contactcart from "../components/Contactcart";
import CartCard from "../Components/CartCard";
import Cartmisc from "../Components/Cartmisc";
import Contactcart from "../Components/Contactcart";
import { useNavigate } from "react-router-dom";


const Cart = () => {

  const navigate = useNavigate()

return (
  <> 
  <Box onClick={()=>navigate("/cart/delivery")} width={"95%"} margin="auto"  display={"flex"} alignItems="center" border="1px solid white" justifyContent={"space-between"} marginBottom="20px" >
    <Text>YOUR SHOPPING BAG</Text>
     <Box cursor={"pointer"} boxSizing="border-box" border={"1px solid white"} p="7px 2px" color={"white"} bg="black" fontSize="13px" align="center" w="200px">PROCEED TO CHECKOUT</Box>
  </Box>
  <Box display={["none","flex","flex"]} m="0px 50px" h={"30px"} >
      <Box  w={"15%"} ></Box>
      <Box  w={"58%"}  ></Box>
      <Box w={"9%"} h={"100%"} fontSize={["7px","7px","13px"]} fontWeight={650} display="flex" alignItems={"center"} justifyContent="center"  >PRICE</Box>
      <Box w={"9%"} h={"100%"} fontSize={["7px","7px","13px"]} fontWeight={650} display="flex" alignItems={"center"} justifyContent="center"  >QUANTITY</Box>
      <Box w={"9%"} h={"100%"} fontSize={["7px","7px","13px"]} fontWeight={650} display="flex" alignItems={"center"} justifyContent="center"  >SUBTOTAL</Box>

     
  </Box>
  <Divider w={"90%"} m="auto"/>
  
  
    
        <CartCard/>
       

       <Cartmisc/>
       <Contactcart/>
     

  </>

);
};

export default Cart;
