import React, { useContext } from "react";
import {
  Box,
  Stack,
  Flex,
  Text,
  Spacer,
  Image,
  Input,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { AppContext } from "../Context/Context";

export default function Navbar({ category }) {
  const { isOpen, onOpen, onClose}=useDisclosure()
  const toast = useToast();

  const { token, nav } = useContext(AppContext);
  const qty = localStorage.getItem("qty");

  function handleLogin() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("qty");
    toast({
      title: "Log out succssfully!",

      status: "error",
      duration: 9000,
      isClosable: true,
    });
    nav("/login");
  }
  return (
    <>
      <Box mb={7} color="gray" paddingBottom="1rem">
        <Stack
          w={{ lg: "90%", md: "90%", sm: "90%" }}
          h={{ lg: "20vh", md: "8vh" }}
          margin="auto"
        >
          <Flex
            display={{ lg: "flex", md: "none", sm: "none" }}
            justifyContent="space-between"
            alignItems="center"
            mt={3}
            mb={2}
          >
            <Flex
              gap="1.2rem"
              fontSize="sm"
              pl={2}
              color="black"
              display={["none", "flex", "flex"]}
            >
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

            <Flex
              fontSize="0.75rem"
              color="black"
              gap="3.5rem"
              display={["none", "flex", "flex"]}
            >
              {token ? (
                <Text letterSpacing={1} cursor="pointer">
                  My account
                </Text>
              ) : (
                <Link to="/login">
                  <Text letterSpacing={1} cursor="pointer">
                    My account
                  </Text>
                </Link>
              )}
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

          {/* <Spacer /> */}
          <Flex alignItems="center">
            <Box
              zIndex="200"
              display={{
                lg: "none",
                md: "none",
                sm: "inline-block",
              }}
            >
              <Menu >
                <MenuButton
                  as={IconButton}
                  size={"md"}
                  variant="ghost"
                  colorScheme="none"
                  aria-label="Account"
                  _hover={{bg:"none"}}
                  icon={isOpen ? <CloseIcon  color={"#111"}  fontSize={"md"} /> : <HamburgerIcon color={"#111"} fontSize={"2xl"} />}
                  
                  display={{ lg: "none" }}
                  onClick={isOpen ? onClose : onOpen}
                />
                <MenuList>
                  <MenuItem _hover={{bg:"#f3f3f3"}} transition="1s">
                    <Link to="/women">
                      <Text letterSpacing={1} cursor="pointer">
                        Women
                      </Text>
                    </Link>
                  </MenuItem>
                  <MenuItem _hover={{bg:"#f3f3f3"}} transition="1s">
                    <Link to="/men">
                      <Text letterSpacing={1} cursor="pointer">
                        Men
                      </Text>
                    </Link>
                  </MenuItem>
                  <MenuItem _hover={{bg:"#f3f3f3"}} transition="1s">
                    <Link to="/kids">
                      <Text letterSpacing={1} cursor="pointer">
                        Kids
                      </Text>
                    </Link>
                  </MenuItem>

                  <MenuDivider />
                  <MenuItem _hover={{bg:"#f3f3f3"}} transition="1s">
                    {token ? (
                      <Text
                        letterSpacing={1}
                        onClick={handleLogin}
                        cursor="pointer"
                      >
                        Log out
                      </Text>
                    ) : (
                      <Link to="/login">
                        <Text letterSpacing={1} cursor="pointer">
                          Sign In
                        </Text>
                      </Link>
                    )}
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Spacer />
            <Box
              w="80%"
              p="20px 0"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Logo />
            </Box>
            <Spacer />

            <Link to="/cart">
              <Flex alignItems="center" cursor="pointer">
                <Text
                  display={["none", "inline-block", "inline-block"]}
                  fontSize="sm"
                  ml={2}
                >
                  SHOPPING BAG
                </Text>

                <Box
                  position={"relative"}
                  textAlign="center"
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <Image
                    h="25px"
                    w="25px"
                    mr={2}
                    ml={2}
                    src="https://img.icons8.com/ios/2x/shopping-bag--v3.png"
                  />
                  <Text
                    mt="25%"
                    fontSize="xs"
                    position={"absolute"}
                    color="black"
                    mr={2}
                    ml={2}
                  >
                    {qty}
                  </Text>
                </Box>
              </Flex>
            </Link>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
