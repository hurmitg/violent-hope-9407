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

export default function SignUp() {
  return (
    <Flex
      
      w={["100%", "100%", "50%"]}
      color="#757575"
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} w="100%" py={12} >
        <Box bg={"white"} textAlign={"justify"} p={8} borderRight={"1px solid #cfcfcf"}>
          <Box fontSize={"2xl"} textTransform={'uppercase'}  color="#111" fontWeight={100}>
            Create An Account
          </Box>
          <Text mt="3%">
            Please enter the following information to create your account.
          </Text>
          <Box mt="5%">
           <CheckboxGroup  colorScheme="blue" defaultValue={["Ms."]}>
            <Stack spacing={[1, 5]} mt="2%" direction={["column","row", "row"]}>
              <Checkbox value="Ms.">Ms.</Checkbox>
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
              <Input type="first name" placeholder="First name*" />
            </FormControl>
            <FormControl id="password">
              <Input type="last name" placeholder="Last name*" />
            </FormControl>
            <FormControl id="password">
              <Input type="email" placeholder="Email address*" />
            </FormControl>
            <FormControl id="password">
              <Input type="password" placeholder="password*" />
            </FormControl>
            <FormControl id="password*">
              <Input type="confirm password*" placeholder="Last name*" />
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
                bg={"#f2f2f2"}
                color={"#222"}
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
