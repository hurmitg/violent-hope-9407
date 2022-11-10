import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Divider,
} from "@chakra-ui/react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function LoginMain() {
  return (
    <Stack
      minH={"100vh"}
      w="85%"
      m="auto"
      direction={{ base: "column", md: "row" }}
    >
      <SignUp />
      
      <Login />
    </Stack>
  );
}
