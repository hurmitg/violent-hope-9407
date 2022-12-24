import { Box, Button, Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
function Corousel() {
  let [count, setCount] = useState(0);
  let arr = [
    "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/10/P00723961_d2.jpg",
    "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c9/P00723934_d2.jpg",
    "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/85/P00723896_d2.jpg",
    "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9f/P00724648_d2.jpg",
    "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/63/P00678391_d2.jpg",
    "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9e/P00724130_d2.jpg",
    "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/66/P00723891_d2.jpg",
    "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/51/P00678392_d2.jpg",
  ];

  return (
    <>
      <Flex gap={2} w={{ lg: "100%", md: "100%", sm: "100%" }} ml="3rem"flexDirection={["column","column","column","row"]} alignItems="center">
        <Button
          onClick={() => setCount(count - 1)}
          disabled={count === 0 ? true : false}
          bgColor="white"
          mt="5rem"
        >
          <Icon as={ChevronLeftIcon} w={10} h={10} />
        </Button>
        <Box>
          <Image src={arr[count]}  _hover={{transform:"scale(1.2)"} }/>
        </Box>
        <Box>
          <Image src={arr[count + 1]}  _hover={{transform:"scale(1.2)"} }/>
        </Box>
        <Box>
          <Image src={arr[count + 2]}  _hover={{transform:"scale(1.2)"} }/>
        </Box>
        <Box>
          <Image src={arr[count + 3]}  _hover={{transform:"scale(1.2)"} }/>
        </Box>
        <Button
          onClick={() => setCount(count + 1)}
          bgColor="white"
          _hover={{ bg: "white" }}
          mt="5rem"
          disabled={count === arr.length - 4 ? true : false}
         
        >
          <Icon as={ChevronRightIcon} w={10} h={10} />
        </Button>
      </Flex>
    </>
  );
}

export default Corousel;
