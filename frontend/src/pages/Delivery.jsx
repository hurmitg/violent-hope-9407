import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Image,
  Img,
  Input,
  Radio,
  RadioGroup,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contactcart from "../Components/Contactcart";
//   import Contactcart from "../components/Contactcart";

const Delivery = () => {
  const [info, setInfo] = useState({
    prefix: "",
    firstname: "",
    lastname: "",
    address: "",
  });

  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    if (!info.prefix || !info.firstname || !info.lastname || !info.address) {
      return toast({
        title: "please fill all the fields",

        status: "error",
        duration: 3500,
        isClosable: true,
      });
    }

    // localStorage.removeItem("address")
    localStorage.setItem("address", JSON.stringify(info));

    setSubmit(true);

    toast({
      title: "address successfully added",

      status: "success",
      duration: 3500,
      isClosable: true,
    });
  };

  const handleprefix = (e) => {
    setInfo({ ...info, prefix: e.target.value });
  };

  const handlenavigate = () => {
    if (!info.prefix || !info.firstname || !info.lastname || !info.address) {
      return toast({
        title: "please fill all the fields",

        status: "error",
        duration: 3500,
        isClosable: true,
      });
    }

    if (!submit) {
      return toast({
        title: "please submit info",

        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setInfo({ prefix: "", firstname: "", lastname: "", address: "" });

    navigate("/cart/delivery/pay");
  };

  return (
    <>
      {/* <Image margin={"auto"} w={["200px","300px","350px"]} mt={"100px"} src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20221109T180626" /> */}

      <Box
        w={"90%"}
        // border="1px solid black"
        m={"auto"}
        mt="50px"
        height="auto"
        display={"flex"}
        flexDirection={["column", "row", "row"]}
        gap="30px"
      >
        <Box
          w={["100%", "50%", "50%"]}
          m={{ base: "auto" }}
          h="100%"
          border={"0px"}
        >
          <VStack align={"left"}>
            <Text>SHIPPING ADDRESS</Text>
            <Text color={"gray.500"} fontSize="14px">
              Please enter your shipping address in the form below
            </Text>

            <FormControl as="fieldset" onChange={handleprefix}>
              <RadioGroup defaultValue={info.prefix}>
                <HStack spacing="24px">
                  <Radio value="Ms.">Ms.</Radio>
                  <Radio value="Mrs.">Mrs.</Radio>
                  <Radio value="Mr.">Mr.</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            <Input
              onChange={handleChange}
              name="firstname"
              w={"95%"}
              value={info.firstname}
              borderRadius={"0px"}
              placeholder="first name"
            />
            <Input
              onChange={handleChange}
              name="lastname"
              w={"95%"}
              value={info.lastname}
              borderRadius={"0px"}
              placeholder="last name"
            />
            <Input
              onChange={handleChange}
              name="address"
              value={info.address}
              w={"95%"}
              borderRadius={"0px"}
              placeholder="full address"
            />
            {/* <Button onClick={handleSubmit}>Submit</Button> */}
          </VStack>
        </Box>
        <Divider
          display={["none", "block", "block"]}
          orientation={"vertical"}
          h={"300px"}
        />

        {/* second box */}
        <Box
          w={["100%", "50%", "50%"]}
          m={{ base: "auto" }}
          h="100%"
          border={"1px solid white"}
        >
          <VStack align={"left"}>
            <Text>SHIPPING METHOD</Text>
            <Text color={"gray.500"} fontSize="14px">
              Please select your preferred shipping method.
            </Text>
            <Divider />
            <Text>Express</Text>
            <Text color={"gray.500"} fontSize="14px">
              2-4 business days delivery time
            </Text>

            <FormControl as="fieldset" onChange={handleprefix}>
              <RadioGroup defaultValue="Itachi">
                <HStack spacing="24px">
                  <Radio value="Mytheresa packaging">
                    <VStack align={"left"}>
                      <Text>Mytheresa packaging</Text>
                      <Text color={"gray.500"} fontSize="14px">
                        Free
                      </Text>
                      <Img
                        w="90px"
                        src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_mytheresa_2x.jpg"
                      />
                    </VStack>
                  </Radio>
                  <Radio value="Eco packaging">
                    <VStack align={"left"}>
                      <Text>Eco packaging</Text>
                      <Text color={"gray.500"} fontSize="14px">
                        Free
                      </Text>
                      <Img
                        w="90px"
                        src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_brown_2x.jpg"
                      />
                    </VStack>
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            <Divider />
            <Text>CLIMATE NEUTRAL OPTION</Text>
            <Checkbox color={"gray.500"} fontSize="14px">
              Help offset the CO2 emissions of your order
            </Checkbox>
          </VStack>
        </Box>
      </Box>

      <Box
        h={"auto"}
        w="90%"
        m={"auto"}
        border={"1px solid white"}
        mt="40px"
        display="flex"
        justifyContent={"space-between"}
      >
        <Box
          boxSizing="border-box"
          border={"1px solid white"}
          display="flex"
          bg="gray.300"
          fontSize={["8px", "10px", "13px"]}
          alignItems={"center"}
          justifyContent={"center"}
          w={["120px", "150px", "190px"]}
          h="30px"
          cursor="pointer"
          onClick={() => {
            navigate("/cart");
          }}
        >
          BACK TO SHOPPING BAG
        </Box>

        <Box>
          <Box
            boxSizing="border-box"
            border={"1px solid white"}
            display="flex"
            bg="gray.300"
            fontSize={["8px", "10px", "13px"]}
            alignItems={"center"}
            justifyContent={"center"}
            w={["120px", "150px", "190px"]}
            h="30px"
            mb={"20px"}
            onClick={handleSubmit}
            cursor="pointer"
          >
            SUBMIT ADDRESS
          </Box>

          <Box
            boxSizing="border-box"
            border={"1px solid white"}
            display="flex"
            color={"white"}
            bg="black"
            fontSize={["8px", "10px", "13px"]}
            alignItems={"center"}
            justifyContent={"center"}
            w={["120px", "150px", "190px"]}
            h="30px"
            cursor="pointer"
            onClick={handlenavigate}
          >
            PROCEED TO CHECKOUT
          </Box>
        </Box>
      </Box>

      <Contactcart />
    </>
  );
};

export default Delivery;
