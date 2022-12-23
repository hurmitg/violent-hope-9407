import {
  Box,
  Button,
  Flex,
  Text,
  Grid,
  GridItem,
  Image,
  Stack,
  Center,
  Heading,
  UnorderedList,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Landing Page/Carousel";
import women from "../Landing Page/Data/women.json";
import Navbar2 from "./dropdownNav/Navbar2";
function Women() {
  document.title = "Women’s Luxury Fashion & Designer Shopping | Violent Hope";
  return (
    <>
    <Link to="/womenproduct"><Navbar2/></Link>
      <Box w={{ lg: "75%", md: "100%", sm: "100%" }} margin="auto">
        <Link to="/womenproduct">
          <Flex
            h={{ lg: "71vh", md: "46vh", sm: "46vh" }}
            direction="column"
            alignItems="flex-end"
            w="100%"
            backgroundSize="cover"
            backgroundImage={
              "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/ODLR_Big_DSK_2x_20221028110114.jpg?imwidth=1180&imdensity=1"
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
                  THE EXCLUSIVE CAPSULE COLLECTION
                </Text>
                <Text
                  color="white"
                  fontSize={{ lg: "55", md: "35", sm: "30" }}
                  textAlign={["left", "right", "right", "right"]}
                  w="70%"
                >
                  {" "}
                  Oscar de la Renta x Mytheresa
                </Text>
                <Link to="/womenproduct">
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
        <Flex
          mt="2.4rem"
          mb="1.6rem"
          padding="1.8rem 0 1.8rem 0"
          bgColor="blackAlpha.100"
          direction="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Text fontSize="1rem" wordSpacing={1}>
            DON'T MISS OUT
          </Text>
          <Text fontSize="2.2rem" fontWeight="400">
            New Arrivals
          </Text>
          <Text color="gray" fontSize="1.1rem">
            Oscar de la Renta, Roger Vivier, Chloé, Vince...
          </Text>
          <Link to="/womenproduct">
            <Button
              h={8}
              fontSize={13}
              borderRadius="none"
              mt="1.2rem"
              bgColor="black"
              color="white"
              colorScheme="black"
            >
              SHOP NOW
            </Button>
          </Link>
        </Flex>

       
          

        <Box display={["block", "block", "flex"]}>
          <Box mx="10px" align="center" w={["100%", "100%", "50%"]}>
            <Text mb="30px" fontSize={["10px", "10px", "20px"]}>
            THE BRIBAL EDIT
            </Text>
            <Text mb="30px" fontSize={["13px", "20px", "36px"]}>
            Your down-the-aisle outfit is ready for you 
            </Text>
            <Image
              mb="30px"
              src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/ActboxTall-StellaParty_2x_20221028105957.jpg?imwidth=600&imdensity=1"
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
              You never forget your first pair of Louboutins
              </Text>
              <Image
                mb="30px"
                w="100%"
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/LoubiFamily_ActboxSmall_2x__20221031171804.jpg?imwidth=600&imdensity=1"
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
              CHRISTIAN LOUBOUTIN'S LOUBI FAMILY
              </Text>
              <Text mb="30px" fontSize={["13px", "20px", "36px"]}>
              Furry best friends deserve  <br /> glamorous
              </Text>
              <Image
                mb="30px"
                w="100%"
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/LoubiFamily_ActboxSmall_2x_2_20221031171804.jpg?imwidth=600&imdensity=1"
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
        <hr />

        <Box mt="23px" display={["block", "block", "flex"]}>
          <Box mx="10px" display="block">
            <Box
              border="px solid red"
              align="center"
              w={["100%", "100%", "100%"]}
            >
              <Text mt="20px" mb="30px" fontSize={["10px", "10px", "20px"]}>
              CHRISTIAN LOUBOUTIN'S LOUBI FAMILY
              </Text>
              <Text mb="30px" fontSize={["13px", "20px", "36px"]}>
              You never forget your first <br/> pair of Louboutins
              </Text>
              <Image
                mb="30px"
                w="100%"
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_1_2x_20221212110608.jpg?imwidth=600&imdensity=1"
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
              <Text mt="20px" mb="30px" fontSize={["10px", "10px", "20px"]}>
              THE BRIBAL EDIT
              </Text>
              <Text mb="30px" fontSize={["13px", "20px", "36px"]}>
              Your down-the-aisle outfit is<br/> ready for you
              </Text>
              <Image
                mb="30px"
                w="100%"
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/Festive-Nov_ActboxSmall_GiftHIM_2x_20221028110222.jpg?imwidth=600&imdensity=1"
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
          <Box mx="10px" align="center" w={["100%", "100%", "50%"]}>
            <Text mt="20px" mb="30px" fontSize={["10px", "10px", "20px"]}>
            CHRISTIAN LOUBOUTIN'S LOUBI FAMILY
            </Text>
            <Text mb="30px" fontSize={["13px", "20px", "36px"]}>
             
              You never forget your first pair of <br />Louboutins
            </Text>
            <Image
              mb="30px"
              src="https://img.mytheresa.com/media/static/raw/cms/l/Rick_Owens_Moncler/Moncler_Maya_ActboxTall_2x_20221102170308.jpg?imwidth=600&imdensity=1"
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

        <Carousel link={"/women"} title="Women's Collection" data={women} />
        <Box w={["80%", "95%", "95%", "95%"]} margin="auto">
          <Center mt="2rem">
            <Box lineHeight="1rem">
              <Heading fontSize="15px" fontWeight="400" mb="0.5rem">
                MYTHERESA – WOMEN’S LUXURY AND DESIGNER FASHION
              </Heading>
              <Text fontSize="12px" fontWeight="400">
                Mytheresa is the most-trusted source for finding the finest
                selection of luxurious womenswear. Our expert buying team
                travels the globe with a simple mission: to bring international
                fashion’s finest directly to your doorstep. With our
                runway-fresh new arrivals every week, an easy-to-navigate
                platform and a mobile app to shop on-the-go, we ensure a
                boutique-like feeling for a unique shopping experience.
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
                  900 new arrivals each week directly from the runway
                  Well-curated selection of items for a boutique-like
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
                  Exceptional customer service available 24 hours a day, 7 days
                  a week in 13 different languages
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
          <Text fontSize="12px" fontWeight="400" mt="1rem">
            Whether you are looking for the latest Bottega Veneta pouch for
            everyday wear, Jimmy Choo heels for an upcoming wedding, or a
            Burberry scarf to gift a friend, our edit comprises the key pieces
            that you need for an elegant season ahead. With our assortment of
            timeless items and exclusive capsule collections, which includes
            everything from the understated luxury of Loro Piana and avant-garde
            appeal of Maison Margiela, to Saint Laurent bags and time-honored
            Gucci loafers; you are certain to find everything you want to build
            your dream closet.
          </Text>
          <Text fontSize="12px" fontWeight="400" mt="1rem">
            Get inspired by our coveted edit, which makes occasion dressing easy
            by breaking down our buy into easy-to-shop categories such as
            fashion sneakers or exquisite gowns. Delve into our exclusive
            selection of designer must-haves. Our exceptional customer service
            team is here to help you through every step of the order process,
            and beyond, to make sure you start every day dressed to conquer.
          </Text>
          <Text fontSize="12px" fontWeight="400" mt="1rem">
            Shop with us and discover why Mytheresa is your final destination
            for online shopping for women.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Women;
