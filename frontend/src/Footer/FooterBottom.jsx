import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { BsPaypal } from "react-icons/bs";
import { FaDhl } from "react-icons/fa";

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

export default function FooterBottom() {
  return (
    <Box
      w="90%"
      m="auto"
      mt="1%"
      borderTop={"1px solid #cfcfcf"}
    
      color={"gray"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>copyright © 2006-2022 violenthope.com</Text>
        <Stack direction={"row"} alignItems="center" spacing={6}>
          
          <p>term of use</p>

            
           
          
      
      </Stack>
      <Stack direction={"row"} alignItems="center" spacing={6}>
          
          <p>privacy policy</p>

           
           
          
      
      </Stack>
        <Stack direction={"row"} alignItems="center" spacing={6}>
          
          <p>delivery by:</p>

            <SocialButton label={"paypal"} href={"#"}>
              <BsPaypal color="#3b7bbf"  />
            </SocialButton>
           
          
      
      </Stack>
        <Stack direction={"row"} alignItems="center" spacing={6}>
          
          <p>delivery by:</p>

            <SocialButton label={"paypal"} href={"#"}>
              <FaDhl color="red"  fontSize={"60px"} />
            </SocialButton>
           
          
      
      </Stack>
      </Container>
    </Box>
  );
}
