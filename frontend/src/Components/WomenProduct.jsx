import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useToast,
  Button,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function WomenProduct() {
  const [data, setData] = useState([]);
  const [brand, setBrand] = useState([]);
  const [type, setType] = useState([]);
  const toast = useToast();

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://violent-hope.onrender.com/api/products?category=women"
      );
      setData(data);

      let branArr = data
        .map((el) => {
          return el.brand;
        })
        .filter((item, i, ar) => ar.indexOf(item) === i);
      setBrand(branArr);

      let TypeArr = data
        .map((el) => {
          return el.type;
        })
        .filter((item, i, ar) => ar.indexOf(item) === i);
      setType(TypeArr);
    } catch (e) {
      toast({
        title: "Error Occurred !",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const BrandFilter = async (brand) => {
    try {
      const { data } = await axios.get(
        `https://violent-hope.onrender.com/api/products?category=women&brand=${brand}`
      );
      setData(data);
    } catch (e) {
      toast({
        title: "Error Occurred !",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const TypeFilter = async (type) => {
    try {
      const { data } = await axios.get(
        `https://violent-hope.onrender.com/api/products?category=women&type=${type}`
      );
      let branArr = data
        .map((el) => {
          return el.brand;
        })
        .filter((item, i, ar) => ar.indexOf(item) === i);
      setBrand(branArr);
      setData(data);
    } catch (e) {
      toast({
        title: "Error Occurred !",
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
      <Flex
        p="20px 20px"
        position="sticky"
        top={0}
        bg="rgb(255, 255, 255)"
        justifyContent="space-between"
        alignItems="center"
        zIndex="100"
        gap="1.2rem"
        fontSize="sm"
        fontWeight="300"
        color="#757575"
        display={{ lg: "flex", md: "none", sm: "none" }}
      >
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Text
            mr={4}
            mb={["20px", "0", "0"]}
            letterSpacing={1}
            cursor="pointer"
            display={["none", "inline-block", "inline-block"]}
          >
            NEW ARRIVALS
          </Text>
          {type.map((el) => {
            return (
              <Text
                mr={4}
                textTransform="uppercase"
                mb={["20px", "0", "0"]}
                letterSpacing={1}
                key={el}
                cursor="pointer"
                onClick={() => {
                  TypeFilter(el);
                }}
              >
                {el}
              </Text>
            );
          })}

          <Text letterSpacing={1} cursor="pointer" mb={["20px", "0", "0"]}>
            SALE
          </Text>
        </Box>

        <Box
          display={["none", "flex", "flex"]}
          w="20%"
          h="50%"
          alignItems="center"
          justifyContent="space-around"
        >
          <Input
            placeholder="Search for..."
            p={3}
            w="180px"
            borderRadius="none"
          ></Input>

          <Image
            src="https://img.icons8.com/ios/2x/search--v3.png"
            h={{ lg: "3vh", md: "2vh", sm: "2vh" }}
          />
        </Box>
      </Flex>
      <hr />
      <Box
        w={{ lg: "90%", md: "100%", sm: "100%" }}
        margin="auto"
        display="flex"
      >
        <Box
          w="25%"
          display={["none", "flex", "flex"]}
          mt={5}
          flexDirection="column"
        >
          <Text fontSize="lg" as="b" mb={3}>
            Designer
          </Text>

          {brand.map((el) => (
            <Button
              key={el}
              variant="ghost"
              fontWeight="400"
              p={2}
              w="70%"
              onClick={() => BrandFilter(el)}
            >
              <Text
                w="100%"
                textAlign="left"
                fontSize="sm"
                fontWeight="300"
                m={0}
                color="#757575"
              >
                {el}
              </Text>
            </Button>
          ))}
        </Box>
        <SimpleGrid
          columns={{ lg: "3", md: "3", sm: "2" }}
          gap="10px 10px"
          w="75%"
          m="auto"
          mt="40px"
        >
          {data?.map((e) => (
            <Flex
              borderBottom={["1px solid #757575", "none", "none"]}
              alignItems="center"
              direction="column"
              textAlign="center"
              key={e.id}
              justifyContent="space-around"
            >
              <Link to={`/women/${e._id}/`}>
                <Image src={e.image} h="70%" mb="8px"></Image>
                <Text as="b">{e.brand}</Text>
                <Text>{e.title}</Text>
                <Text as="b">₹{e.price}</Text>
              </Link>
            </Flex>
          ))}

          <Box></Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default WomenProduct;
