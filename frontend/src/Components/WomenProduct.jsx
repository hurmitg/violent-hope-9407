import { Box, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect } from "react";

function WomenProduct() {
  const [data, setData] = useState([]);

  let getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(data);
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />

      <Box w={{ lg: "75%", md: "100%", sm: "100%" }} margin="auto">
        <SimpleGrid
          columns={{ lg: "3", md: "3", sm: "2" }}
          spacing={{ lg: "12", md: "20", sm: "20" }}
        >
          {data?.map((e) => (
            <Flex w="20vw" h="20vw" alignItems="center" direction="column">
              <Image src={e.image} h="100%" w="90%"></Image>

              {/* <Text>{e.title}</Text> */}
              <Text as="b"> ₹{e.price}</Text>
            </Flex>
          ))}

          <Box></Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default WomenProduct;
