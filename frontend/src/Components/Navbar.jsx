import React, { useContext } from "react";
import { Box, Stack, Flex, Text, Spacer, Image, Input, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { AppContext } from "../Context/Context";

export default function Navbar() {
  const toast=useToast()
  const { token,nav } = useContext(AppContext);
  function handleLogin(){
    localStorage.removeItem("token")
    toast({
      title: 'Log out succssfully!',
     
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
    nav("/login")
  }
  return (
    <Box
      mb={7}
      border="1px"
      borderLeft="none"
      borderRight="none"
      borderTop="none"
      color="gray"
      paddingBottom="1rem"
    >
      <Stack
        w={{ lg: "90%", md: "90%", sm: "90%" }}
        h={{ lg: "23vh", md: "8vh" }}
        margin="auto"
      >
        <Flex
          display={{ lg: "flex", md: "none", sm: "none" }}
          justifyContent="space-between"
          alignItems="center"
          mt={3}
          mb={2}
        >
          <Flex gap="1.2rem" fontSize="0.9rem" color="black">
            <Link to="/women">
              <Text letterSpacing={1} cursor="pointer">
                Women
              </Text>
            </Link>
            <Link to="/men">
              <Text letterSpacing={1} cursor="pointer">
                Men
              </Text>
            </Link>
            <Link to="/kids">
              <Text letterSpacing={1} cursor="pointer">
                Kids
              </Text>
            </Link>
          </Flex>

          <Flex fontSize="0.75rem" color="black" gap="3.5rem">
            <Text letterSpacing={1} cursor="pointer">
              Signup for Newsletter
            </Text>
            <Link to="/login">
              <Text letterSpacing={1} cursor="pointer">
                My account
              </Text>
            </Link>
            {token ? (
              <Text letterSpacing={1} onClick={handleLogin} cursor="pointer">
                Log out
              </Text>
            ) : (
              <Link to="/login">
                <Text letterSpacing={1} cursor="pointer">
                  Sign In
                </Text>
              </Link>
            )}
          </Flex>
        </Flex>

        <Spacer />
        <Flex alignItems="center">
          <Box
            display={{ lg: "none", md: "inline-block", sm: "inline-block" }}
          ></Box>
          <Spacer />
          <Box pl={{ lg: "8rem", md: "0", sm: "0" }}>
            <Logo />
          </Box>
          <Spacer />
          <Flex gap={2} alignItems="center" cursor="pointer">
            <Text
              display={{ lg: "inline-block", md: "none", sm: "none" }}
              fontSize="0.9rem"
            >
              SHOPPING BAG
            </Text>

            <Box>
              <Image
                h={{ lg: "4.7vh", md: "4vh", sm: "4vh" }}
                src="https://img.icons8.com/ios/2x/shopping-bag--v3.png"
              />
            </Box>
          </Flex>
        </Flex>
        <Spacer />

        <Flex
          gap="1.2rem"
          fontSize="0.9rem"
          color="black"
          display={{ lg: "flex", md: "none", sm: "none" }}
        >
          <Text letterSpacing={1} cursor="pointer">
            NEW ARRIVALS
          </Text>

          <Text letterSpacing={1} cursor="pointer">
            DESIGNERS
          </Text>

          <Text letterSpacing={1} cursor="pointer">
            CLOTHING
          </Text>
          <Text letterSpacing={1} cursor="pointer">
            SHOES
          </Text>

          <Text letterSpacing={1} cursor="pointer">
            BAGS
          </Text>

          <Text letterSpacing={1} cursor="pointer">
            ACCESSORIES
          </Text>

          <Text letterSpacing={1} cursor="pointer">
            FESTIVE SEASON
          </Text>

          <Text letterSpacing={1} cursor="pointer">
            SALE
          </Text>

          <Input
            placeholder="Search for..."
            ml="10rem"
            w="180px"
            mt="-1rem"
            borderRadius="none"
          ></Input>

          <Image
            src="https://img.icons8.com/ios/2x/search--v3.png"
            h={{ lg: "2vh", md: "2vh", sm: "2vh" }}
            mt="-0.5vh"
          />
        </Flex>
      </Stack>
    </Box>
  );
}
