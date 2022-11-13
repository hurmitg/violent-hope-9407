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
  price = 100,
  handleplus,
  handleminus,
  handleRemove,
  id,
  itemnumber,
}) => {
  const [data, setData] = useState({ price: 5000, wish: false, qty: 1 });
  const [wish, setWish] = useState(false);
  const toast = useToast();

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
        p={2}
        m="auto"
        height={"auto"}
        justifyContent="center"
        alignItems={["center", "flex-start", "flex-start"]}
        flexDirection={["column", "row", "row"]}
      >
        <Box w={["70%", "30%", "15%"]} p="5px" align="center">
          <Image w={["100%", "70%", "70%"]} h={"95%"} src={image}></Image>
        </Box>
        <Box w={["60%", "43%", "58%"]} textAlign={["center", "left", "left"]}>
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
                onClick={() => handleRemove(id)}
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

        <Box w={["100%", "27%", "27%"]} display="flex" mt="15px">
          <Box
            w={["auto", "33%", "30%"]}
            textAlign="left"
            display={["none", "inline-block", "inline-block"]}
          >
            <Text color={"gray"}>₹ {price}</Text>
          </Box>

          <Box
            w={["30%", "30%", "20%"]}
            m="auto"
            align="center"
            display={"flex"}
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              disabled={qty == 1}
              onClick={() => handleminus(qty, id)}
              size={"xs"}
              variant="ghost"
            >
              -
            </Button>
            <Text color={"gray"} textDecor="underline">
              {qty}
            </Text>
            <Button
              onClick={() => handleplus(qty, id)}
              size={"xs"}
              variant="ghost"
            >
              +
            </Button>
          </Box>

          <Box w={["50%", "33%", "33%"]} align="center">
            <Text w="100%" color={"gray"}>
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
