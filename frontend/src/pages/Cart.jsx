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
import CartCard from "../components/CartCard";
import styles from "./styles.module.css"
import Cartmisc from "../components/Cartmisc";
import Contactcart from "../components/Contactcart";

const Cart = () => {

 
  return (
    <> 
    <Box  width={"95%"} margin="auto"  display={"flex"} alignItems="center" border="1px solid white" justifyContent={"space-between"} marginBottom="20px" >
      <Text>YOUR SHOPPING BAG</Text>
       <Box boxSizing="border-box" border={"1px solid white"} p="7px 2px" color={"white"} bg="black" fontSize="13px" align="center" w="200px">PROCEED TO CHECKOUT</Box>
    </Box>
    <Box className={styles.parentCart} >
        <Box  className={styles.cartnavOne} ></Box>
        <Box  className={styles.cartnavTwo}  ></Box>
        <Box className={styles.cartnav}   >PRICE</Box>
        <Box className={styles.cartnav}   >QUANTITY</Box>
        <Box className={styles.cartnav}   >SUBTOTAL</Box>

       
    </Box>
    <Divider w={"90%"} m="auto"/>
    
    
      
          <CartCard/>
         

         <Cartmisc/>
         <Contactcart/>
       

    </>

  );
};

export default Cart;
