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
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../Context/Context";

const Cart = () => {
  const toast = useToast();
  const [data1, setData1] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const { token } = useContext(AppContext);

  const handleGet = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:8081/api/cart`, config)
      .then((res) => {
        // console.log(res.data[0].cartItems);
        window.localStorage.setItem("qty", res.data[0].cartItems.length);
        setData1(res.data[0].cartItems);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGet();
  }, []);

  useEffect(() => {
    const st = data1.reduce(
      (acc, elem) => acc + elem.product.price * elem.quantity,
      0
    );

    setSubtotal(st);
  }, [data1]);
  const navigate = useNavigate();

  const handleplus = (qty, id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .patch(
        `http://localhost:8081/api/cart`,
        { proId: id, qty: qty + 1 },
        config
      )
      .then((res) => setData1(res.data.cartItems));
  };

  const handleminus = (qty, id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .patch(
        `http://localhost:8081/api/cart`,
        { proId: id, qty: qty - 1 },
        config
      )
      .then((res) => setData1(res.data.cartItems));
  };

  const handleRemove = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(`http://localhost:8081/api/cart/remove`, { cartProID: id }, config)
      .then((res) =>
        toast({
          description: "Product removed",
          status: "error",
          duration: 3500,
          isClosable: true,
        })
      )
      .then((res) => handleGet());
  };

  return (
    <>
      <Box
        onClick={() => navigate("/cart/delivery")}
        width={"95%"}
        margin="auto"
        flexDir={["column", "row", "row"]}
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
          display={["none", "inline-block", "inline-block"]}
          p={3}
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

      {data1.map((elem) => (
        <CartCard
          key={elem._id}
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
