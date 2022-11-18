import { Box, Button, Img } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  document.title="Your order summary";

  const navigate = useNavigate();

  return (
    <>
      <Box align="center" m={"50px"}>
        <Img
          m={"auto"}
          src="https://drive.google.com/uc?export=view&id=1x7RxY6daLMxwov_maF4m8uiaGPyePLPO"
        />

        <Button onClick={() => navigate("/")} colorScheme="whatsapp">
          GO TO HOMEPAGE
        </Button>
      </Box>
    </>
  );
};

export default Summary;
