import { Box, Button, Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
function Corousel() {
  let [count, setCount] = useState(0);
  let arr = [
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/4c/P00674504.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/30/P00675265.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/e4/P00701157.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/1e/P00737342.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/4c/P00674504.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/30/P00675265.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/e4/P00701157.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/1e/P00737342.jpg",
  ];




let arr1=["https://img.mytheresa.com/420/475/95/jpeg/catalog/product/aa/P00501799.jpg",
"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/0e/P00734009.jpg",
"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/b8/P00488900.jpg",
"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2c/P00689719.jpg",
"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/c1/P00737514.jpg",
"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a1/P00562750.jpg",
"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/b8/P00488900.jpg",
"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2c/P00689719.jpg",
"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/c1/P00737514.jpg",
"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a1/P00562750.jpg"]





  return (
    <>
      <Flex gap={2} w={{ lg: "100%", md: "100%", sm: "100%" }}>
        <Button onClick={()=>setCount(count-1)} disabled={count==0 ? true : false}  bgColor="white"   mt="5rem">
          <Icon
            as={ChevronLeftIcon}
            w={10}
            h={10}
        
          />
        </Button>
        <Box>
          <Image src={arr[count]} />
        </Box>
        <Box>
          <Image src={arr[count+1]} />
        </Box>
        <Box>
          <Image src={arr[count+2]} />
        </Box>
        <Box>
          <Image src={arr[count+3]} />
        </Box>
        <Button onClick={()=>setCount(count+1)} bgColor="white"  _hover={{ bg: "white" }}   mt="5rem" disabled={count==arr.length-4 ? true : false}>
          <Icon
            as={ChevronRightIcon}
            w={10}
            h={10}
          
          />
        </Button>
      </Flex>
    </>
  );
}

export default Corousel;
