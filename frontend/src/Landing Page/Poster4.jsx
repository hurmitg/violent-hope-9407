import { Flex, Image, Box, Text, Button, Heading } from "@chakra-ui/react";
import React from "react";

export default function Poster4({ image }) {
  return (
    <Flex
      m="auto"
      mt="5%"
      w="80%"
      cursor={"pointer"}
      justifyContent="center"
      alignItems={"center"}
      position="relative"
    >
      <Box
        position={"absolute"}
        color="#f2f2f2"
        lineHeight={"7vw"}
        textAlign={'center'}
      >
        <Text>LIFE'S LITTLE LUXURIES </Text>
        <Heading fontWeight={400} fontSize={"3rem"}>
          Mytheresa presents Gucci Décor
        </Heading>
        <Button borderRadius={"none"} color="#111" fontWeight={100}>
          SHOP NOW{" "}
        </Button>
      </Box>
      <Image w="100%" h="100%" zIndex={-33} src={image} />
    </Flex>
  );
}
