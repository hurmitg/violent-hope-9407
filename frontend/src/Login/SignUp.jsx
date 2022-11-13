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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../Context/Context";

export default function SignUp() {
  const {
    token,
    nav,
    setLoading,
    setError,
    setSuccess,
    loading,
    error,
    success,
  } = useContext(AppContext);

  const toast = useToast();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    comfirmpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (user.password !== user.comfirmpassword) {
      toast({
        title: "Password did not match.",

        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    } else {
      if (token) {
        toast({
          title: "You are already login!",

          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        try {
          let res = await axios.post(
            "http://localhost:8081/api/user/signup",
            user
          );
          document.cookie = "MyMetheresaToken" + "=" + res.data.token;
          await window.localStorage.setItem("token", res.data.token);
          toast({
            title: "Account created successfully!",

            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setLoading(false);
          setSuccess(false);
          nav("/");
          window.location.reload();
        } catch (e) {
          console.log(e);
          setLoading(false);
          setError(false);
          toast({
            title: e.response.data.message,

            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      }
    }
  }

  return (
    <Flex
      w={["100%", "100%", "50%"]}
      color="#757575"
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} w="100%" py={12}>
        <Box
          bg={"white"}
          textAlign={"justify"}
          p={8}
          borderRight={["none", "none", "1px solid #cfcfcf"]}
        >
          <Box
            fontSize={"2xl"}
            textTransform={"uppercase"}
            color="#111"
            fontWeight={100}
          >
            Create An Account
          </Box>
          <Text mt="3%">
            Please enter the following information to create your account.
          </Text>

          <Box mt="5%">
            <CheckboxGroup colorScheme="blue">
              <Stack
                spacing={[1, 5]}
                mt="2%"
                direction={["column", "row", "row"]}
              >
                <Checkbox value="Ms." defaultValue>
                  Ms.
                </Checkbox>
                <Checkbox value="Mrs.">Mrs.</Checkbox>
                <Checkbox value="Mr.">Mr.</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
          <Stack spacing={5} mt="5%">
            <FormControl id="email">
              <Select>
                <option value="academic title">academic title</option>
                <option value=""></option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
                <option value="Prof.">Prof. Dr.</option>
              </Select>
            </FormControl>
            <FormControl id="email">
              <Input
                name="name"
                type="first name"
                onChange={(e) => handleChange(e)}
                placeholder="First name*"
              />
            </FormControl>
            <FormControl id="password">
              <Input type="last name" placeholder="Last name*" />
            </FormControl>
            <FormControl id="password">
              <Input
                name="email"
                type="email"
                onChange={(e) => handleChange(e)}
                placeholder="Email address*"
              />
            </FormControl>
            <FormControl id="password">
              <Input
                name="password"
                type="password"
                onChange={(e) => handleChange(e)}
                placeholder="password*"
              />
            </FormControl>
            <FormControl id="password">
              <Input
                name="comfirmpassword"
                type="confirm password*"
                onChange={(e) => handleChange(e)}
                placeholder="confirm password*"
              />
            </FormControl>
            <Stack spacing={10}>
              <Box
                direction={{ base: "column", sm: "row" }}
                textAlign={"justify"}
                color={"#757575"}
              >
                <Box mt="2%">
                  {" "}
                  <Checkbox> </Checkbox>
                  From now on I will receive the Mytheresa Newsletter with
                  selected fashion offers. If I do not wish to receive the
                  newsletter, I can unsubscribe at any time free of charge at{" "}
                  <a href="mailto:privacy@mytheresa.com">
                    privacy@mytheresa.com
                  </a>
                  .
                </Box>
                <Box mt="5%">
                  <Text>
                    I agree that Mytheresa may insert analytical web beacons
                    into the newsletter and create a personalized user profile
                    based on my purchase and usage behavior, including sending a
                    notification when I have placed something in the shopping
                    cart. Further details can be found in our Privacy Policy,
                    clause 5. I understand that I can revoke my consent at any
                    time by emailing privacy@mytheresa.com.
                  </Text>
                </Box>
              </Box>
              <Button
                isLoading={loading ? true : false}
                loadingText="Please wait..."
                bg={"#f2f2f2"}
                color={"#222"}
                onClick={handleSubmit}
                borderRadius={"none"}
                fontWeight={100}
                fontSize={"12px"}
                m={["auto", "auto", "none"]}
                w={["60%", "60%", "20%"]}
                _hover={{
                  bg: "#f3f3f3",
                }}
              >
                REGISTER
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
