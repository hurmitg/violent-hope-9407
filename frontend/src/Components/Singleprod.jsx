import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "./Navbar";

const SingleProd = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const params = useParams();
  const toast = useToast();
  console.log(params);
  const prodId = params.id;

  let getData = () => {
    axios
      .get(
        `http://localhost:8081/api/products?category=${params.category}&_id=${params.id}`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data[0]);
      });
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmI3NmMyN2M4ZWZkYTU0MmJkOTA2ZSIsImlhdCI6MTY2ODI2NzUwNCwiZXhwIjoxNjcwODU5NTA0fQ.uNK_AL7zPpSQl4--uUew5zhxZlNWOVegUwuqiOdAVkk";
  let handleCart = async (prodId) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    try {
      await axios.post(`http://localhost:8081/api/cart`, {
        product: prodId,
        quantity: 1,
      },config);
      console.log(data);
    } catch (e) {
      toast({
        title: "Error Occurred !",
        description: "Failed to load chats.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box w={{ lg: "75%", md: "100%", sm: "100%" }} margin="auto">
        <Flex
          h={{ lg: "80vh", md: "70vh" }}
          w={{ lg: "100%", md: "100%", sm: "100%" }}
          margin="auto"
          justifyContent={{ lg: "space-between", md: "space-evenly" }}
          alignItems="center"
        >
          <Box w={{ lg: "30%", md: "22%", sm: "20%" }}>
            <Image src={data.image} alt="oneproduct" />
          </Box>

          <Stack
            justifyContent="space-between"
            h={{ lg: "90%", md: "66%", sm: "66%" }}
            w={{ lg: "50%", md: "50%", sm: "50%" }}
          >
            <Stack>
              <Text fontSize="2rem">{data.title}</Text>
              <Text fontSize="1.5rem">₹{data.price}</Text>

              <Text>{data.description}</Text>
            </Stack>
            <Button
              colorScheme="black"
              bgColor="black"
              color="white "
              onClick={() => handleCart({ prodId })}
            >
              ADD TO CART
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default SingleProd;
