import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  CheckboxGroup,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import React from "react";

export default function Login() {
  return (
    <Flex
      w={["100%", "100%", "50%"]}
      color="#757575"
      minH={"100vh"}
      
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} w="100%" py={12}>
        <Box bg={"white"} textAlign={"justify"} p={8}>
          <Box fontSize={"2xl"} color="#111" fontWeight={100}>
            ALREADY REGISTER?
          </Box>
          <Text mt="3%">
            If you have an account with us, please log in.
          </Text>
          
          <Stack spacing={5} mt="5%">
           
          
            
            <FormControl id="password">
              <Input type="email" placeholder="Email address*" />
            </FormControl>
            <FormControl id="password">
              <Input type="password" placeholder="password*" />
            </FormControl>
          
            <Stack spacing={10}>
              <Box
                direction={{ base: "column", sm: "row" }}
                textAlign={"justify"}
                color={"#757575"}
              >
                <Box >
                  {" "}
                 <Text>* required fields</Text>
                </Box>
                <Box mt="3%">
                  {" "}
                 <Link>Forgot Your Password?</Link>
                </Box>
                <Box mt="5%">
                <Button
                bg={"#111"}
                color={"white"}
                borderRadius={"none"}
                fontWeight={100}
                fontSize={"12px"}
                m={["auto", "auto", "none"]}
                
                w={["60%", "60%", "20%"]}
                _hover={{
                  bg: "#222",
                }}
              >
                LOGIN
              </Button>

                </Box>
               
                <Box mt="5%">
                  <Text>
                    At Mytheresa, we keep your information secure. As a result,
                    it will be necessary for you to log in to your account
                    before you are able to place an order or change the
                    information on your account. You will be asked to log in to
                    complete your order even if you have already been greeted on
                    the website.
                  </Text>
                </Box>
              </Box>
             
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
