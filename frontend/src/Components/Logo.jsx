import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../VH.png"

export default function Logo() {
  return (
    <Box  h={["6vw","6vw","4vw"]} w={["100%","90%","80%"]} p="5px" m="auto">
      <Link to="/">
        <Image
         h="100%"
          w="100%"
          cursor="pointer"
          src={logo}
          alt="onkar"
        />
      </Link>
    </Box>
  );
}
