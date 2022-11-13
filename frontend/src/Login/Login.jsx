import {
  Flex,
  Box,
  FormControl,
  Input,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { AppContext } from "../Context/Context";
export default function Login() {
  const { token, nav, setLoading, setError, setSuccess, loading } =
    useContext(AppContext);
  const toast = useToast();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (token) {
      toast({
        title: "You have already login!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      nav("/");
      setLoading(false);
    } else {
      try {
        let res = await axios.post(
          "https://violent-hope.onrender.com/api/user/login",
          user
        );

        document.cookie = `MyMetheresaToken=${res.data.token}`;

        await window.localStorage.setItem("token", res.data.token);
        toast({
          title: "Login successfully!",

          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setLoading(false);
        setSuccess(true);
        nav("/");
        // window.location.reload();
      } catch (e) {
        console.log(e);
        setError(false);
        setLoading(false);
        toast({
          title: e.response.data.message,

          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  }

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
          <Text mt="3%">If you have an account with us, please log in.</Text>

          <Stack spacing={5} mt="5%">
            <FormControl id="password">
              <Input
                name="email"
                onChange={(e) => handleChange(e)}
                type="email"
                placeholder="Email address*"
              />
            </FormControl>
            <FormControl id="password">
              <Input
                name="password"
                onChange={(e) => handleChange(e)}
                type="password"
                placeholder="password*"
              />
            </FormControl>

            <Stack spacing={10}>
              <Box
                direction={{ base: "column", sm: "row" }}
                textAlign={"justify"}
                color={"#757575"}
              >
                <Box>
                  {" "}
                  <Text>* required fields</Text>
                </Box>
                <Box mt="3%">
                  {" "}
                  <Link>Forgot Your Password?</Link>
                </Box>
                <Box mt="5%">
                  <Button
                    isLoading={loading ? true : false}
                    loadingText="Please wait..."
                    bg={"#111"}
                    color={"white"}
                    borderRadius={"none"}
                    fontWeight={100}
                    fontSize={"12px"}
                    m={["auto", "auto", "none"]}
                    onClick={handleSubmit}
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
