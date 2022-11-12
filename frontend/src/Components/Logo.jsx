import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Box>
      <Link to="/">
        <Image
          w="18vw"
          cursor="pointer"
          src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220906T141618"
          alt="onkar"
        />
      </Link>
    </Box>
  );
}
