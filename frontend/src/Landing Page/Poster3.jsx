import { Flex, Image, Box, Text, Button, Heading } from "@chakra-ui/react";
import React from "react";

export default function Poster3({ image }) {
  return (
    <Flex
      m="auto"
      mt="5%"
      w="80%"
      h="60vh"
      cursor={"pointer"}
      alignItems={"center"}
      position="relative"
    >
     

      <Box position={"absolute"} w="50%" bg="#111" h="100%" left={0}></Box>
      <Box position={"absolute"} color="#f2f2f2" lineHeight={"7vw"} mt="5%" ml="5%" w="40%">
        <Heading  fontWeight={400} fontSize={"3rem"}>The perfect gift</Heading>
        <Text>The pieces to add to your wishlist</Text>
        <Button borderRadius={"none"} color="#111" fontWeight={100}>
          SHOP NOW{" "}
        </Button>
      </Box>

      <Image
        position={"absolute"}
        w="50%"
        right={0}
        h="100%"
        zIndex={-33}
        src={image}
      />
    </Flex>
  );
}
