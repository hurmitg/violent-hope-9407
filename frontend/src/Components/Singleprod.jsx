import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Button,
  useToast,
  Spacer,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "./Navbar";

const SingleProd = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [AddedCart, setAddedCart] = useState(false);
  const params = useParams();
  const toast = useToast();

  const prodId = params.id;

  let getData = () => {
    axios
      .get(
        `http://localhost:8081/api/products?category=${params.category}&_id=${params.id}`
      )
      .then((res) => {
        setData(res.data[0]);
      });
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmI3NmMyN2M4ZWZkYTU0MmJkOTA2ZSIsImlhdCI6MTY2ODI2NzUwNCwiZXhwIjoxNjcwODU5NTA0fQ.uNK_AL7zPpSQl4--uUew5zhxZlNWOVegUwuqiOdAVkk";
  let handleCart = async (prodId) => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(
        `http://localhost:8081/api/cart`,
        {
          cartItems: [
            {
              product: params.id,
              quantity: 1,
            },
          ],
        },
        config
      );
      setLoading(false);
      setAddedCart(true);
      toast({
        title: "Product Added !",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (e) {
      setLoading(false);
      toast({
        title: "Error Occurred !",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
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
            // h={{ lg: "90%", md: "66%", sm: "66%" }}
            w={{ lg: "50%", md: "50%", sm: "50%" }}
          >
            <Stack>
              <Text fontSize="2xl" fontWeight="600">
                {data.brand}
              </Text>
              <Text fontSize="xl">{data.title}</Text>
              <Text fontSize="lg" fontWeight="600">
                ₹ {data.price}
              </Text>
            </Stack>
            <Button
              w={["100%", "50%", "50%"]}
              colorScheme="black"
              bgColor="black"
              color="white "
              isLoading={loading}
              isDisabled={AddedCart}
              onClick={() => handleCart({ prodId })}
            >
              ADD TO SHOPPING BAG
            </Button>
            <Spacer />
            <Text w={["90%","80%","80%"]} mt="30px">{data.description}</Text>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default SingleProd;
