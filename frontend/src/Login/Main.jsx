import { Stack } from "@chakra-ui/react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function LoginMain() {
  document.title="Login/Signup"
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
