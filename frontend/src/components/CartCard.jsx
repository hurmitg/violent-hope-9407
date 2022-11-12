import { CloseIcon, SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Td,
  Text,
  Toast,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const CartCard = ({
  qty = 1,
  brand = "CHLOE",
  title = "my brand",
  image = "https://img.mytheresa.com/240/240/90/jpeg/catalog/product/e0/P00731129.jpg",
  price=100,
  handleplus,
  handleminus,
  handleRemove,
  id,
  itemnumber
}) => {
  const [data, setData] = useState({ price: 5000, wish: false, qty: 1 });
  const [wish, setWish] = useState(false);
  const toast = useToast();


  // item number
 

  // const handleRemove = () => {
  //   toast({
  //     title: "Product removed",
  //     description: "We have remove the item from your cart.",
  //     status: "error",
  //     duration: 2000,
  //     isClosable: true,
  //   });
  // };

  const handleWish = () => {
    setWish(!wish);
    toast({
      title: "Added to wishlist",
      description: "We have added the item to your cart.",
      status: wish ? "error" : "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box
        display={"flex"}
        p={"15px 0px 30px 0px"}
        m="0px 50px"
        height={"auto"}
        justifyContent="center"
        alignItems={"center"}
        flexDirection={["column", "row", "row"]}
      >
        <Box w={["60%", "30%", "15%"]} p="5px" align="center">
          <Image w="80%" h={"95%"} src={image}></Image>
        </Box>
        <Box w={["60%", "43%", "58%"]}>
          <VStack spacing={"25px"} align={"left"}>
            <VStack align={"left"}>
              <Text>{brand}</Text>
              <Text color={"gray"} fontSize={["11px", "11px", "14.5px"]}>
                {title}
              </Text>
              <Text color={"gray"} fontSize={["11px", "11px", "14.5px"]}>
                Size : FR 36/XS-S
              </Text>
              <Text color={"gray"} fontSize={["11px", "11px", "14.5px"]}>
                Item No : {itemnumber}
              </Text>
            </VStack>
            <HStack spacing={["50px", "30px", "15px"]}>
              <Button
                onClick={()=>handleRemove(id)}
                variant={"link"}
                size={"xs"}
                leftIcon={<CloseIcon size="15px" />}
              >
                Remove
              </Button>
              <Button
                onClick={handleWish}
                variant={"link"}
                size={"xs"}
                leftIcon={
                  <AiOutlineHeart color={wish ? "red" : "gray"} size={"15px"} />
                }
              >
                Add to wishlist
              </Button>
            </HStack>
          </VStack>
        </Box>

        <Box w={"27%"} display="flex">
          {" "}
          <Box
            w={["auto", "33%", "33%"]}
            fontSize={["11px", "11px", "15px"]}
            align="center"
          >
            <Text mt={"15px"} color={"gray"}>
              ₹ {price}
            </Text>
          </Box>
          <Box
            w={["auto", "33%", "33%"]}
            fontSize={["11px", "11px", "15px"]}
            align="center"
          >
            <Text mt={"12px"} color={"gray"} align={"center"}>
              {qty}
            </Text>

            <Box border={"0px"} display={{ base: "flex" }}>
              <Button
                disabled={qty == 1}
                onClick={() =>handleminus(qty,id)}
                m={"5px"}
                size={"xs"}
                variant="outline"

              >
                -
              </Button>

              <Button
                onClick={() => handleplus(qty,id)}
                m={"5px"}
                size={"xs"}
                variant="outline"
              >
                +
              </Button>
            </Box>
          </Box>
          <Box
            w={["auto", "33%", "33%"]}
            fontSize={["11px", "11px", "15px"]}
            align="center"
          >
            <Text mt={"15px"} color={"gray"}>
              ₹ {qty * price}
            </Text>
          </Box>
        </Box>
      </Box>
      <Divider w={"90%"} m="auto" />
    </>
  );
};

export default CartCard;
