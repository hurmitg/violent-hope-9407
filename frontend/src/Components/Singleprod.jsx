
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
import { useContext } from "react";
import { AppContext } from "../Context/Context";

const SingleProd = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [AddedCart, setAddedCart] = useState(false);
  const params = useParams();
  const toast = useToast();

  const prodId = params.id;
  const { token } = useContext(AppContext);

  let getData = () => {
    try {
      axios
        .get(
          `https://violent-hope.onrender.com/api/products?category=${params.category}&_id=${params.id}`
        )
        .then((res) => {
          setData(res.data[0]);
        });
    } catch (error) {
      toast({
        title: "Error Occured",
        status: "error",
        description: error,
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  let handleCart = async (prodId) => {
    if (!token) {
      return toast({
        title: "Please Login First !",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(
        `https://violent-hope.onrender.com/api/cart`,
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
      <Box
        w={{ lg: "75%", md: "100%", sm: "100%" }}
        margin="auto"
        mt={10}
        mb={10}
      >
        <Flex
          w={{ lg: "100%", md: "90%", sm: "80%" }}
          p={3}
          textAlign={["center", "left", "left"]}
          margin="auto"
          justifyContent={{ lg: "space-between", md: "space-evenly" }}
          alignItems="center"
          flexDir={["column", "row", "row"]}
        >
          <Box w={{ lg: "40%", md: "22%", sm: "20%" }}>
            <Image
              src={data.image}
              borderRadius="10px"
              objectFit="cover"
              alt="oneproduct"
              _hover={{transform:"scale(1.2)"} }
            />
          </Box>

          <Box
            justifyContent="space-between"
            h={{ lg: "90%", md: "66%", sm: "66%" }}
            w={{ lg: "50%", md: "50%", sm: "50%" }}
            p={5}
          >
            <Stack>
              <Text fontSize="3xl" letterSpacing={1} fontWeight="400">
                {data.brand}
              </Text>
              <Text fontSize="lg" letterSpacing={1} color="#757575">
                {data.title}
              </Text>
              <Text
                fontSize="lg"
                color="#757575"
                letterSpacing={1}
                fontWeight="600"
              >
                ₹ {data.price}
              </Text>
            </Stack>
            <Button
              w={["100%", "50%", "50%"]}
              colorScheme="black"
              borderRadius={0}
              fontSize="xs"
              fontWeight="300"
              letterSpacing={1}
              m="20px 0"
              bgColor="black"
              color="white "
              isLoading={loading}
              isDisabled={AddedCart}
              onClick={() => handleCart({ prodId })}
            >
              ADD TO SHOPPING BAG
            </Button>
            <Text letterSpacing={1} color="#757575" w="100%" mt="30px">
              {data.description}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SingleProd;
