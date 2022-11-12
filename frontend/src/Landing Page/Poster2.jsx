import { Flex, Image, Box, Text, Button, Heading } from "@chakra-ui/react";
import React from "react";

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
          <Heading fontWeight={400} fontSize={"6xl"}>
            {data.title2}
          </Heading>
        </Box>
        <Box w="50%"  display={"flex"}
        justifyContent="center">
          <Heading fontWeight={400} fontSize={"6xl"}>
            {data.title}
          </Heading>
        </Box>
      </Box>
      <Image w="100%" h="100%" zIndex={-33} src={data.image} />
    </Flex>
  );
}
