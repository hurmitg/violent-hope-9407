import { Flex, Image, Box, Text, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Poster2({ data }) {
  return (
    <Flex
      m="auto"
      mt="5%"
      w={["95%", "95%", "80%"]}
      cursor={"pointer"}
      alignItems={"center"}
      position="relative"
    >
      <Box
        position={"absolute"}
        color="#f2f2f2"
        lineHeight={"7vw"}
        m="auto"
        display={"flex"}
        justifyContent="center"
        textAlign={"center"}
        w="100%"
      >
      

        <Box w="50%">
        <Link to="/women">
          <Heading fontWeight={400} fontSize={"6xl"}>
            {data.title2}
          </Heading>
        </Link >
        </Box>
        
        <Box w="50%"  display={"flex"}
        justifyContent="center">
          <Link to="/men">
          <Heading fontWeight={400} fontSize={"6xl"}>
            {data.title}
          </Heading>
          </Link>
        </Box>
      </Box>
      <Image w="100%" h="100%" zIndex={-33} src={data.image} />
    </Flex>
  );
}
