import { Box, Heading } from '@chakra-ui/react';
import React from 'react'

import MatrixParallax from "react-matrix-parallax";
export default function ErrorPage() {
  return (
    
     <MatrixParallax color="white" backgroundColor="rgba(0,0,0,1)">
      <Box textAlign={"center"} >
        <Heading fontSize={"14rem"}>404!</Heading>
        <h5 style={{ maxWidth: "100vw",fontSize:"8rem" }}>Page Not Found</h5>
      </Box>
    </MatrixParallax>

  )
}
