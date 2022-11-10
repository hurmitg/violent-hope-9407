import { Flex, Image, Box, Text, Button, Heading } from "@chakra-ui/react";
import React from "react";

export default function Poster2({ image }) {
  return (
    <Flex
      m="auto"
      mt="5%"
      cursor={"pointer"}
      w="80%"
      h="60vh"
      alignItems={"center"}
      position="relative"
    >
       
      <Box position={"absolute"} w="50%" bg="#111" h="100%" right={0}></Box>

      <Image
        position={"absolute"}
        w="50%"
        lwft={0}
        h="100%"
        zIndex={-33}
        src={image}
      />
       <Box position={"absolute"}  right={0} color="#f2f2f2" lineHeight={"7vw"} mt="5%" w="40%">
        <Heading  fontWeight={400} fontSize={"3rem"}>Statement pants</Heading>
        <Text>Build looks that turn heads with standout pants</Text>
        <Button borderRadius={"none"} color="#111" fontWeight={100}>
          SHOP NOW{" "}
        </Button>
      </Box>
    </Flex>
  );
}
