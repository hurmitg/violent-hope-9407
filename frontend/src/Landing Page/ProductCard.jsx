import { Box, Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'

export default function ProductCard() {
  return (
    <Box  textAlign="center" h="100%" w="100%" > 
        <Image w="100%" h="80%" src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/20/P00702018.jpg"/>
        <Text color={"gray"} p="1rem">ALEXANDER MCQUEEN </Text>
        <span style={{fontWeight:800}}>€ 1,425</span>

    </Box>
  )
}
