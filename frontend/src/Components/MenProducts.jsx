import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function MenProduct() {
  const [data, setData] = useState([]);
  const [brand, setBrand] = useState([]);
  const toast = useToast();
  let getData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8081/api/products?category=men"
      );
      setData(data);

      let branArr = data
        .map((el) => {
          return el.brand;
        })
        .filter((item, i, ar) => ar.indexOf(item) === i);

      setBrand(branArr);
    } catch (e) {
      toast({
        title: "Error Occurred !",
        description: "Failed to load chats.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const BrandFillter = async (brand) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8081/api/products?category=men&brand=${brand}`
      );

      setData(data);
    } catch (e) {
      toast({
        title: "Error Occurred !",
        description: "Failed to load chats.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box
        w={{ lg: "85%", md: "100%", sm: "100%" }}
        margin="auto"
        display="flex"
      >
        <Box w="25%" display="flex" flexDirection="column">
          <Text fontSize="xl" as="b" mb={3}>
            Designer
          </Text>

          {brand.map((el) => (
            <Button
              variant="ghost"
              fontWeight="400"
              onClick={() => BrandFillter(el)}
            >
              <Text w="100%" textAlign="left">
                {el}
              </Text>
            </Button>
          ))}
        </Box>
        <SimpleGrid
          columns={{ lg: "3", md: "3", sm: "2" }}
          gap="10px 10px"
          w="75%"
        >
          {data?.map((e) => (
            <Flex
              alignItems="center"
              direction="column"
              textAlign="center"
              key={e.id}
              justifyContent="space-around"
            >
              <Link to={`/men/${e._id}/`}>
                <Image src={e.image} h="70%" mb="8px"></Image>
                <Text as="b">{e.brand}</Text>
                <Text>{e.title}</Text>
                <Text as="b">₹{e.price}</Text>
              </Link>
            </Flex>
          ))}

          <Box></Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default MenProduct;
