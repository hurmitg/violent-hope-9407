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
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./styles.module.css";

const CartCard = () => {
  const [data, setData] = useState({ price: 5000, wish: false, qty: 1 });
  const [wish, setWish] = useState(false);
  const toast = useToast();

  const handleRemove = () => {
    toast({
      title: "Product removed",
      description: "We have remove the item from your cart.",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

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
      <Box className={styles.cartCardparent}>
        <Box  className={styles.first} align="center">
          <Image
            w="80%"
            h={"95%"}
            src="https://img.mytheresa.com/240/240/90/jpeg/catalog/product/e0/P00731129.jpg"
          ></Image>
        </Box>
        <Box className={styles.second}>
          <VStack spacing={"25px"} align={"left"}>
            <VStack align={"left"}>
              <Text>CHLOE</Text>
              <Text className={styles.one}>
                Ruffle-trimmed vergin wool midi dress
              </Text>
              <Text className={styles.one}>Size : FR 36/XS-S</Text>
              <Text className={styles.one}>Item No : P00731129</Text>
            </VStack>
            <HStack>
              <Button
                onClick={handleRemove}
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
          <Box className={styles.two} align="center">
            <Text mt={"15px"} color={"gray"}>
              ₹ {data.price}
            </Text>
          </Box>
          <Box className={styles.two} align="center">
            <Text mt={"12px"} color={"gray"} align={"center"}>
              {data.qty}{" "}
            </Text>

            <Box className={styles.incdre}>
            <Button
              disabled={data.qty == 1}
              onClick={() => setData({ ...data, qty: data.qty - 1 })}
              m={"5px"}
              size={"xs"}
              variant="outline"
            >
              -
            </Button>

            <Button
              onClick={() => setData({ ...data, qty: data.qty + 1 })}
              m={"5px"}
              size={"xs"}
              variant="outline"
            >
              +
            </Button>
            </Box>
          </Box>
          <Box className={styles.two} align="center">
            <Text mt={"15px"} color={"gray"}>
              ₹ {data.qty * data.price}
            </Text>
          </Box>
        </Box>
      </Box>
      <Divider w={"90%"} m="auto" />
    </>
  );
};

export default CartCard;
