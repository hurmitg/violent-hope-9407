import { Box, Button, Divider, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

const Cartmisc = () => {
  return (
    <>    <Box w={"90%"} m="auto" border={"1px solid white"} mt="10px">
      <VStack align={"left"}>
        <Text>YOUR CURRENT PROMOTION</Text>
        <Text color={"gray"}>Free shipping</Text>
        <Divider />
      </VStack>

      <Box className={styles.section3}>
        <Box className={styles.section31}>
          <Text fontSize={'14px'}>
            Use code WELCOME 10 for 10% off selected items when your first order
            is over ₹600
          </Text>
          <Box className={styles.section31a}>
            <Input placeholder="Gift Card/Store Credit/Promo Code" />
            <Button colorScheme={"gray"} fontSize="13px">USE CODE</Button>
          </Box>
        </Box>
        <Box
          className={styles.section32}
          align="right"
          border="1px solid white"
        >
          <Text fontSize={14.5} color={"gray"}>
            Subtotal {"Subtotal ₹ 3275"}
          </Text>
          <Text fontSize={14.5} color={"gray"}>
            Shipping(DHL Express) {"₹ 0.00"}
          </Text>
          <Text fontSize={14.5} fontWeight={600}>
            Grand Total {"₹ 0.00"}
          </Text>
          <Text fontSize={14.5} color={"gray"}>
            VAT excetption. VAT not included. Shipping not included.
          </Text>
        </Box>
      </Box>

      <Box  mt={"20px"} mb="30px" display={"flex"} justifyContent="space-between">
        <Button w="150px" fontSize={"13px"}>CONTINUE SHOPPING</Button>
        <Box
          boxSizing="border-box"
          border={"1px solid white"}
          display="flex"
          color={"white"}
          bg="black"
          fontSize="13px"
          alignItems={"center"}
          justifyContent={"center"}
          w="170px"
        >
          PROCEED TO CHECKOUT
        </Box>
      </Box>

     
      
    </Box>
    <Divider w={"90%"} margin="auto"/>
    </>

  );
};

export default Cartmisc;
