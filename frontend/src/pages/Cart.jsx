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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { CloseIcon, EmailIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
import React, { useContext, useEffect, useState } from "react";
// import CartCard from "../components/CartCard";

// import Cartmisc from "../components/Cartmisc";
// import Contactcart from "../components/Contactcart";
import CartCard from "../Components/CartCard";
import Cartmisc from "../Components/Cartmisc";
import Contactcart from "../Components/Contactcart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../Context/Context";

const Cart = () => {


  function getRChar() {
    return ((Math.random() * 26 + 10) | 0).toString(36).toUpperCase();
  }

  var s = getRChar() + getRChar() + Math.floor(Math.random() * 99999 * 7);


  const toast = useToast()
  const [data1, setData1] = useState([]);
  const [subtotal,setSubtotal] = useState(0)
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmI3NmMyN2M4ZWZkYTU0MmJkOTA2ZSIsImlhdCI6MTY2ODI2NzUwNCwiZXhwIjoxNjcwODU5NTA0fQ.uNK_AL7zPpSQl4--uUew5zhxZlNWOVegUwuqiOdAVkk";


    const handleGet = () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get(`http://localhost:8080/api/cart`, config)
        .then((res) => {
          // console.log(res.data[0].cartItems);
          window.localStorage.setItem("qty",res.data[0].cartItems.length)
          setData1(res.data[0].cartItems);
        })
        .catch((err) => console.log(err));
    }

  useEffect(() => {
   
    handleGet()

  }, []);


  useEffect(()=>{
    const st = data1.reduce((acc,elem)=>(
      acc + (elem.product.price * elem.quantity)

    
    ),0)

    setSubtotal(st)

  },[data1])
  const navigate = useNavigate();

  const handleplus = (qty,id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };


    axios.patch(`http://localhost:8080/api/cart`,{"proId":id,"qty":qty+1},config).then(res=>setData1(res.data.cartItems))
  }

  const handleminus = (qty,id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };


    axios.patch(`http://localhost:8080/api/cart`,{"proId":id,"qty":qty-1},config).then(res=>setData1(res.data.cartItems))
  }


  const handleRemove = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.post(`http://localhost:8080/api/cart/remove`,{ "cartProID":id},config).then(res=>toast({

      description:"Product removed",
      status:"error",
      duration:3500,
      isClosable:true
      

    })).then(res=>handleGet())
  } 

  return (
    <>
      <Box
        onClick={() => navigate("/cart/delivery")}
        width={"95%"}
        margin="auto"
        display={"flex"}
        alignItems="center"
        border="1px solid white"
        justifyContent={"space-between"}
        marginBottom="20px"
      >
        <Text>YOUR SHOPPING BAG</Text>
        <Box
          cursor={"pointer"}
          boxSizing="border-box"
          border={"1px solid white"}
          p="7px 2px"
          color={"white"}
          bg="black"
          fontSize="13px"
          align="center"
          w="200px"
        >
          PROCEED TO CHECKOUT
        </Box>
      </Box>
      <Box display={["none", "flex", "flex"]} m="0px 50px" h={"30px"}>
        <Box w={"15%"}></Box>
        <Box w={"58%"}></Box>
        <Box
          w={"9%"}
          h={"100%"}
          fontSize={["7px", "7px", "13px"]}
          fontWeight={650}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          PRICE
        </Box>
        <Box
          w={"9%"}
          h={"100%"}
          fontSize={["7px", "7px", "13px"]}
          fontWeight={650}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          QUANTITY
        </Box>
        <Box
          w={"9%"}
          h={"100%"}
          fontSize={["7px", "7px", "13px"]}
          fontWeight={650}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          SUBTOTAL
        </Box>
      </Box>
      <Divider w={"90%"} m="auto" />

      {data1.map((elem, i) => (
        <CartCard
          key={i}
          brand={elem.product.brand}
          title={elem.product.title}
          image={elem.product.image}
          price={elem.product.price}
          qty={elem.quantity}
          id={elem._id}
          handleplus={handleplus}
          handleminus={handleminus}
          handleRemove={handleRemove}
          itemnumber={elem.product.itemNo}
        />
      ))}

      <Cartmisc subtotal={subtotal} />
      <Contactcart />
    </>
  );
};

export default Cart;
