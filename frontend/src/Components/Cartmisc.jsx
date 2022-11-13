import { Box, Button, Divider, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cartmisc = ({ subtotal = 0 }) => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Box w={"90%"} m="auto" border={"1px solid white"} mt="10px">
        <VStack align={"left"}>
          <Text>YOUR CURRENT PROMOTION</Text>
          <Text color={"gray"}>Free shipping</Text>
          <Divider />
        </VStack>

        <Box display={"flex"} pt="15px">
          <Box display={"flex"} flexDirection="column" gap={"25px"} w="50%">
            <Text
              fontSize={"14px"}
              display={["none", "inline-block", "inline-block"]}
            >
              Use code WELCOME 10 for 10% off selected items when your first
              order is over ₹600
            </Text>
            <Box display={"flex"} flexDir={["column", "row", "row"]}>
              <Input placeholder="Promo Code" mb="10px" />
              <Button colorScheme={"gray"} fontSize="13px">
                USE CODE
              </Button>
            </Box>
          </Box>
          <Box
            w={"50%"}
            display="50%"
            flexDirection={"column"}
            gap="5px"
            align="right"
            border="1px solid white"
          >
            <Text fontSize={14.5} color={"gray"}>
              Subtotal {subtotal.toLocaleString()}
            </Text>
            <Text fontSize={14.5} color={"gray"}>
              Shipping(DHL Express) {"₹ 0.00"}
            </Text>
            <Text fontSize={14.5} fontWeight={600}>
              Grand Total {subtotal.toLocaleString()}
            </Text>
            <Text fontSize={14.5} color={"gray"}>
              VAT excetption. VAT not included. Shipping not included.
            </Text>
          </Box>
        </Box>

        <Box
          mt={"20px"}
          mb="30px"
          display={"flex"}
          flexDir={["column", "row", "row"]}
          justifyContent="space-between"
        >
          <Button
            fontSize={"13px"}
            p={3}
            mb="20px"
            fontWeight="300"
            borderRadius="0"
          >
            CONTINUE SHOPPING
          </Button>
          <Box
            boxSizing="border-box"
            border={"1px solid white"}
            display="flex"
            color={"white"}
            bg="black"
            fontSize="13px"
            alignItems={"center"}
            justifyContent={"center"}
            p={3}
            cursor={"pointer"}
            onClick={() => navigate("/cart/delivery")}
          >
            PROCEED TO CHECKOUT
          </Box>
        </Box>
      </Box>
      <Divider w={"90%"} margin="auto" />
    </>
  );
};

export default Cartmisc;
