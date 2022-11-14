import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMobile } from "react-icons/bi";
import { BsLinkedin, BsPinterest } from "react-icons/bs";
import Logo from "../Components/Logo";
import { AppContext } from "../Context/Context";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  const { nav } = useContext(AppContext);
  function handleLogin() {
    window.scroll({ top: 0, left: 0 });
    nav("/login");
  }
  return (
    <Box
      w="90%"
      m="auto"
      mt="70px"
      borderTop={"1px solid #cfcfcf"}
      borderBottom={"1px solid #cfcfcf"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack textAlign={"center"} spacing={6} mt={["0%", "10%", "-20%"]}>
            <Logo />
            <Text fontSize={"md"} color={"gray"}>
              © 2022 Violent Hope. All rights reserved
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Violent Hope</ListHeader>
            <Link href={"#"} color="gray">
              About us
            </Link>
            <Link href={"#"} color="gray">
              Trust & services
            </Link>
            <Link href={"#"} color="gray">
              Press
            </Link>
            <Link href={"#"} color="gray">
              Careers
            </Link>
            <Link href={"#"} color="gray">
              Affiliates
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>CUSTOMER CARE</ListHeader>
            <Link href={"#"} color="gray">
              Contact us
            </Link>
            <Link href={"#"} color="gray">
              Shipping information
            </Link>
            <Link href={"#"} color="gray">
              Secure payment
            </Link>
            <Link href={"#"} color="gray">
              Exchanges
            </Link>
            <Link href={"#"} color="gray">
              Returns
            </Link>
            <Link href={"#"} color="gray">
              Gift card
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader color="#111">
              GET TREND UPDATES, STYLE TIPS AND MORE
            </ListHeader>
            <Stack direction={"row"}>
              <Input
                onClick={handleLogin}
                placeholder={"Your email address here..."}
                borderRadius={"none"}
              />
              <Button
                onClick={handleLogin}
                p="0rem 2rem"
                bg={"#f2f2f2"}
                fontWeight={100}
                color={useColorModeValue("#111", "gray.800")}
                borderRadius={"none"}
                _hover={{
                  bg: "#",
                }}
              >
                SIGN UP
              </Button>
            </Stack>
            <Box p="1rem 0">
              <Stack direction={"row"} spacing={2}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <BsLinkedin />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaFacebook />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <BsPinterest />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <BiMobile />
                </SocialButton>
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
