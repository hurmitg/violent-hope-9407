import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import Brand from "./brand";

function Navbar2() {
  return (
    <Box display={["none", "none", "none", "block"]}>
      <Brand />
    </Box>
  );
}

export default Navbar2;
