import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../VH.png";

export default function Logo() {
  return (
    <Box w={["70%", "40%", "40%"]}>
      <Link to="/">
        <Image
          h="100%"
          w="100%"
          cursor="pointer"
          src={logo}
          alt="Violent Hope"
        />
      </Link>
    </Box>
  );
}
