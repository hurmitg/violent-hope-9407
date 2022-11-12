import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Corousel from "./Corousel";
import Navbar from "./Navbar";

function Kids() {
  return (
    <>
   
      <Box w={{ lg: "75%", md: "100%", sm: "100%" }} margin="auto">
        <Flex
          h={{ lg: "71vh", md: "46vh", sm: "46vh" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            h="100%"
            w="49.5%"
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            pb="5rem"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundImage="https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_CW43/Kids_Homepage_Festive_Girls_Desktop_2x_20221021105900.jpg?imwidth=1180&imdensity=1"
          >
            <Stack spacing={5} justifyContent="center" alignItems="center">
              <Text
                fontSize={{ lg: "3.3rem", md: "2.5rem", sm: "2.5rem" }}
                color="white"
              >
                Girls
              </Text>
              <Link to="/kidsproduct">
                <Button
                  bgColor="white"
                  maxW={{ lg: "6vw", md: "10vw", sm: "10vw" }}
                  h={8}
                  fontSize={13}
                  borderRadius="none"
                  color="black"
                  mt="1.2rem"
                  fontWeight="none"
                  w="20vw"
                >
                  SHOP NOW
                </Button>
              </Link>
            </Stack>
          </Flex>

          <Flex
            h="100%"
            w="49.5%"
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            pb="5rem"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundImage="https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_CW43/Kids_Homepage_Festive_Boys_Desktop_2x_20221021105854.jpg?imwidth=1180&imdensity=1"
          >
            <Stack spacing={5} justifyContent="center" alignItems="center">
              <Text
                fontSize={{ lg: "3.3rem", md: "2.5rem", sm: "2.5rem" }}
                color="white"
              >
                Boys
              </Text>
              <Link to="/kidsproduct">
                <Button
                  bgColor="white"
                  maxW={{ lg: "6vw", md: "10vw", sm: "9vw" }}
                  h={8}
                  fontSize={13}
                  borderRadius="none"
                  color="black"
                  mt="1.2rem"
                  fontWeight="none"
                  w="20vw"
                >
                  SHOP NOW
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>

        <Flex
          h={{ lg: "34vh", md: "23vh", sm: "22rem" }}
          mt="2.4rem"
          mb="1.6rem"
          direction="column"
          justifyContent="center"
          alignItems="center"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage="https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_November/Homepage_Kids_BabyBanner_desktop_2x_20221103093127.jpg?imwidth=1180&imdensity=1"
        >
          <Stack spacing={5} justifyContent="center" alignItems="center">
            <Text
              fontSize={{ lg: "3.4rem", md: "2.2rem", sm: "2.2rem" }}
              color="black"
            >
              Baby
            </Text>
            <Link to="/kidsproduct">
              <Button
                colorScheme="black"
                bgColor="black"
                maxW={{ lg: "6vw", md: "9vw", sm: "9vw" }}
                h={8}
                fontSize={{ lg: "13", md: "10", sm: "10" }}
                borderRadius="none"
                color="white"
                mt="1.2rem"
                fontWeight="none"
                w="20vw"
              >
                SHOP NOW
              </Button>
            </Link>
          </Stack>
        </Flex>

        <Flex
          h={{ lg: "45vh", md: "40vh", sm: "46vh" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            h="100%"
            w="49.5%"
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            pb="1rem"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundImage="https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/12_Kids/PocketBanners/FW22/CW44_PB_Skiwear_Image_20221108081623.jpg"
          >
            <Stack spacing={5} justifyContent="center" alignItems="center">
              <Text
                fontSize={{ lg: "1.8rem", md: "1.4rem", sm: "1.4rem" }}
                color="white"
              >
                KIDS' SKIWEAR
              </Text>
              <Link to="/kidsproduct">
                <Button
                  bgColor="white"
                  maxW={{ lg: "6vw", md: "10vw", sm: "9vw" }}
                  h={8}
                  fontSize={13}
                  borderRadius="none"
                  color="black"
                  mt="1.2rem"
                  fontWeight="none"
                  w="20vw"
                >
                  SHOP NOW
                </Button>
              </Link>
            </Stack>
          </Flex>

          <Flex
            h="100%"
            w="49.5%"
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            pb="1rem"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundImage="https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/12_Kids/PocketBanners/FW22/LoibiFamily_PB_KW_Image_20221031164331.jpg"
          >
            <Stack spacing={5} justifyContent="center" alignItems="center">
              <Text
                fontSize={{ lg: "1.8rem", md: "1.5rem", sm: "1.4rem" }}
                color="white"
              >
                LOUBI FAMILY
              </Text>
              <Link to="/kidsproduct">
                <Button
                  bgColor="white"
                  maxW={{ lg: "6vw", md: "10vw", sm: "9vw" }}
                  h={8}
                  fontSize={13}
                  borderRadius="none"
                  color="black"
                  mt="1.2rem"
                  fontWeight="none"
                  w="20vw"
                >
                  SHOP NOW
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>

        <Box mt="2rem" mb={12} marginTop={12}>
          <Text color="black" fontSize={25} mb="1rem" textAlign="center">
            KIDS DESIGNERS
          </Text>
          <Corousel />
          <Center>
            <Link to="/kidsproduct">
              <Button
                colorScheme="blackAlpha"
                maxW={{ lg: "10vw", md: "10vw", sm: "9vw" }}
                h={8}
                fontSize={13}
                bgColor="black"
                borderRadius="none"
                color="white"
                mt="1.6rem"
                w="10vw"
              >
                SHOP KIDS DESIGNERS
              </Button>
            </Link>
          </Center>
        </Box>

        <Flex mt="9rem">
          <Box>
            <Heading fontSize="15px" fontWeight="400" mb="0.5rem">
              DESIGNER KIDSWEAR ONLINE AT MYTHERESA KIDS
            </Heading>
            <UnorderedList fontSize="12px" fontWeight="400">
              <ListItem>
                The finest edit of more than 200 international luxury brands
              </ListItem>
              <ListItem>
                900 new arrivals each week directly from the runway Well-curated
                selection of items for a boutique-like
              </ListItem>
              <ListItem>
                Exclusive designer collaborations and capsule collections that
                you won’t find anywhere else
              </ListItem>
            </UnorderedList>
          </Box>
          <Box ml="2rem">
            <Heading fontSize="15px" fontWeight="400" mb="0.5rem">
              SERVICE AND QUALITY
            </Heading>
            <UnorderedList fontSize="12px" fontWeight="400">
              <ListItem>Authentic products guaranteed</ListItem>
              <ListItem>
                Fast, reliable delivery within 3 business days
              </ListItem>
              <ListItem>Free returns and exchanges within 30 days</ListItem>
              <ListItem>
                Exceptional customer service available 24 hours a day, 7 days a
                week in 13 different languages
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
        <Text fontSize="12px" fontWeight="400" mt="1rem">
          Whether you are looking for the latest Bottega Veneta pouch for
          everyday wear, Jimmy Choo heels for an upcoming wedding, or a Burberry
          scarf to gift a friend, our edit comprises the key pieces that you
          need for an elegant season ahead. With our assortment of timeless
          items and exclusive capsule collections, which includes everything
          from the understated luxury of Loro Piana and avant-garde appeal of
          Maison Margiela, to Saint Laurent bags and time-honored Gucci loafers;
          you are certain to find everything you want to build your dream
          closet.
        </Text>
        <Text fontSize="12px" fontWeight="400" mt="1rem">
          Get inspired by our coveted edit, which makes occasion dressing easy
          by breaking down our buy into easy-to-shop categories such as fashion
          sneakers or exquisite gowns. Delve into our exclusive selection of
          designer must-haves. Our exceptional customer service team is here to
          help you through every step of the order process, and beyond, to make
          sure you start every day dressed to conquer.
        </Text>
        <Text fontSize="12px" fontWeight="400" mt="1rem">
          Shop with us and discover why Mytheresa is your final destination for
          online shopping for women.
        </Text>
      </Box>
    </>
  );
}

export default Kids;
