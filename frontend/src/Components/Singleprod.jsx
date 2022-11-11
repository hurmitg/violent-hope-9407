import { useEffect, useState } from "react";
import { Box, Flex, Image, Stack, Text, Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const SingleProd = () => {
  const [data, setData] = useState({});
  const params = useParams();

  const getData = (params = {}) => {
    return axios.get(`https://fakestoreapi.com/products/`, {
      params: {
        id: params.id,
      },
    });
  };

  useEffect(() => {
    getData({ id: params.id }).then((res) => setData(res.data[0]));
  }, [params.id]);

  return (
    <>
      <Navbar />
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

              <Text>
                Our Legacy's Uniform coat is crafted in Italy from a midweight
                twill and cut into a streamlined silhouette. The single-breasted
                style has notched lapels and a concealed buttoned front.
              </Text>
            </Stack>
            <Button colorScheme="black" bgColor="black" color="white">
              ADD TO CART
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default SingleProd;
