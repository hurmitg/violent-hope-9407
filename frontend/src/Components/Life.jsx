import {
  Box,
  Button,
  Heading,
  Image,
  Center,
  Flex,
  Text,
  UnorderedList,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { transform } from "framer-motion";
import React from "react";

import { Link } from "react-router-dom";
import Carousel from "../Landing Page/Carousel";
import men from "../Landing Page/Data/men.json";
import Corousel from "./Corousel";
import Navbar2 from "./dropdownNav/Navbar2";
function Life() {
  document.title = "Men's Luxury Fashion & Designer Shopping | Violent Hope";
  return (
    <>
      <Link to="/menproduct">
        <Navbar2 />
      </Link>
      <Box w={{ lg: "75%", md: "100%", sm: "100%" }} margin="auto">
        <Link to="/menproduct">
          <Flex
            h={{ lg: "71vh", md: "46vh", sm: "46vh" }}
            direction="column"
            alignItems="flex-end"
            w="100%"
            backgroundSize="cover"
            backgroundImage={
              "https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW51/Big_Festive_LIFE_desktop_2x_20221219101624.jpg?imwidth=1180&imdensity=1"
            }
          >
            <Flex
              width="100%"
              justifyContent="left"
              alignItems="flex-end"
              direction="column"
              marginTop={["4rem", "4rem", "4rem", "5rem"]}
              paddingRight="5rem"
            >
              <Stack
                spacing={3}
                marginTop={"4rem"}
                alignItems={["flex-start", "flex-end", "flex-end", "flex-end"]}
                ml={["1rem", "1rem", "2rem", "2rem"]}
              >
                <Text
                  color="white"
                  textAlign={["left", "right", "right", "right"]}
                >
                  SOFT SPOTS
                </Text>
                <Text
                  color="white"
                  fontSize={{ lg: "55", md: "35", sm: "30" }}
                  textAlign={["left", "right", "right", "right"]}
                >
                  {" "}
                  Home Textiles
                </Text>
                <Link to="/menproduct">
                  <Button
                    h={8}
                    fontSize={13}
                    borderRadius="none"
                    mt={["1rem", "1.2rem", "1.2rem", "1.2rem"]}
                    mb={["1rem"]}
                  >
                    SHOP NOW
                  </Button>
                </Link>
              </Stack>
            </Flex>
          </Flex>
        </Link>

        <Box display={["block", "block", "flex"]} mt="2rem">
          <Box mx="10px" align="center" w={["100%", "100%", "50%"]}>
            <Text mb="30px" fontSize={["10px", "10px", "20px"]}>
              THE BRIBAL EDIT
            </Text>
            <Text mb="30px" fontSize={["13px", "20px", "36px"]}>
              Intriguing additions for living rooms
            </Text>
            <Image
              mb="30px"
              src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW51/CW51_ActboxTall_x2_20221219100308.jpg?imwidth=600&imdensity=1"
              _hover={{ transform:"scale(1.2)" }}
            />
            <Link to="/womenproduct">
              {" "}
              <Button
                mb="30px"
                borderRadius="0px"
                bgColor="black"
                color="white"
                _hover={{ bgColor: "black" }}
              >
                SHOP NOW
              </Button>
            </Link>
          </Box>
          <Box mx="10px" display="block">
            <Box
              border="px solid red"
              align="center"
              w={["100%", "100%", "100%"]}
            >
              <Text mb="30px" fontSize={["10px", "10px", "20px"]}>
                CHRISTIAN LOUBOUTIN'S LOUBI FAMILY
              </Text>
              <Text mb="30px" fontSize={["13px", "20px", "36px"]}>
                Mark special moments with joyful glassware
              </Text>
              <Image
                mb="30px"
                w="100%"
                src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW51/CW51_ActboxSmall__2x_20221219100327.jpg?imwidth=600&imdensity=1"
                
              />
              <Link to="/womenproduct">
                <Button
                  mb="30px"
                  borderRadius="0px"
                  bgColor="black"
                  color="white"
                  _hover={{ bgColor: "black" }}
                >
                  SHOP NOW
                </Button>
              </Link>
            </Box>
            <hr />
            <Box
              mt="23px"
              border="px solid red"
              align="center"
              w={["100%", "100%", "100%"]}
            >
              <Text mb="30px" fontSize={["10px", "10px", "20px"]}>
                TOAST TO THAT
              </Text>
              <Text mb="30px" fontSize={["13px", "20px", "36px"]}>
                Mark special moments with joyful glassware
              </Text>
              <Image
                mb="30px"
                w="100%"
                src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW51/CW51_ActboxSmall_2_2x_20221219100328.jpg?imwidth=600&imdensity=1"
              />
              <Link to="/womenproduct">
                <Button
                  mb="30px"
                  borderRadius="0px"
                  bgColor="black"
                  color="white"
                  _hover={{ bgColor: "black" }}
                >
                  SHOP NOW
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Corousel mt="1rem" />

        <Center>
          <Box lineHeight="1rem" mt="2rem">
            <Heading fontSize="15px" fontWeight="400" mb="0.5rem">
              MYTHERESA – MEN’S LUXURY AND DESIGNER FASHION
            </Heading>
            <Text fontSize="12px" fontWeight="400">
              Mytheresa is the most-trusted source for finding the finest
              selection of luxurious womenswear. Our expert buying team travels
              the globe with a simple mission: to bring international fashion’s
              finest directly to your doorstep. With our runway-fresh new
              arrivals every week, an easy-to-navigate platform and a mobile app
              to shop on-the-go, we ensure a boutique-like feeling for a unique
              shopping experience.
            </Text>
          </Box>
        </Center>

        <Flex mt="2rem">
          <Box>
            <Heading fontSize="15px" fontWeight="400" mb="0.5rem">
              A LUXURY SHOPPING EXPERIENCE
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

export default Life;
