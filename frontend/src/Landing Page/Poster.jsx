import { Flex, Image, Box, Text, Button, Heading } from "@chakra-ui/react";
import React from "react";

export default function Poster({image}) {
  return (
    <Flex m="auto" mt="5%" w="80%"  cursor={"pointer"} alignItems={"center"} position="relative">
      <Box position={"absolute"} color="#f2f2f2" lineHeight={"7vw"} ml="5%" w="40%">
        <Text>_THE EXCLUSIVE CAPSULE COLLECTION</Text>
        <Heading  fontWeight={400} fontSize={"3rem"}>Marni x Mytheresa Men</Heading>
        <Button borderRadius={"none"} color="#111" fontWeight={100}>
          SHOP NOW{" "}
        </Button>
      </Box>
      <Image
        w="100%"
        h="100%"
        zIndex={-33}
        src={image}
      />
    </Flex>
  );
}
