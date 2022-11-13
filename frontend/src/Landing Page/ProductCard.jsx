import { Box, IconButton, Image, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsStar, BsFillStarFill } from "react-icons/bs";
export default function ProductCard({ url }) {
  const [flag, setFlag] = useState(false);
  const toast = useToast();
  function handleFavourit() {
    setFlag(!flag);
    if (!flag) {
      toast({
        title: "Added successfully.",
        description: "You've added this product in your favourite's.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else if (flag) {
      toast({
        title: "Removed.",
        description: "You've remove this product from your favourite's.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }
  return (
    <Box>
      <Box
        p="1rem 0rem"
        cursor={"pointer"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color="#aeb0af"
        w="100%"
      >
        <Box
          textAlign={"center"}
          p="5px 0px"
          borderTop={"1px solid #cfcfcf"}
          borderBottom={"1px solid #cfcfcf"}
          w="50%"
        >
          <Text>New Arrivals</Text>
        </Box>
        <IconButton
          variant={"ghost"}
          _hover={{ bg: "none" }}
          onClick={handleFavourit}
        >
          {flag ? (
            <BsFillStarFill fontSize={"20px"} />
          ) : (
            <BsStar fontSize={"20px"} />
          )}
        </IconButton>
      </Box>

      <Box textAlign="center" h="100%" w="100%">
        <Image w="100%" h="80%" src={url.image} />
        <Text color={"#9e9d9d"} p="1rem">
          {url.title}{" "}
        </Text>
        <span style={{ fontWeight: 800 }}>€ {url.price}</span>
      </Box>
    </Box>
  );
}
