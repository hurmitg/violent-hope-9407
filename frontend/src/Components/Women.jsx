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
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Women() {
  document.title = "Women’s Luxury Fashion & Designer Shopping | Violent Hope";
  return (
    <>
      <Box w={{ lg: "75%", md: "100%", sm: "100%" }} margin="auto">
        <Link to="/womenproduct">
          <Flex
            h={{ lg: "71vh", md: "46vh", sm: "46vh" }}
            direction="column"
            alignItems="flex-end"
            w="100%"
            backgroundPosition="center"
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
              marginTop="5rem"
              paddingRight="5rem"
            >
              <Stack
                spacing={2}
                marginTop="3rem"
                alignItems="flex-end"
                ml="2rem"
              >
                <Text
                  color="white"
                  textAlign="left"
                  letterSpacing={{ lg: "1", md: "0" }}
                >
                  THE EXCLUSIVE CAPSULE COLLECTION
                </Text>
                <Text
                  color="white"
                  fontSize={{ lg: "55", md: "35", sm: "30" }}
                  textAlign="right"
                  w="70%"
                >
                  {" "}
                  Oscar de la Renta x Mytheresa
                </Text>
              </Stack>
              <Link to="/womenproduct">
               
                <Button h={8} fontSize={13} borderRadius="none" mt="1.2rem">
                  SHOP NOW
                </Button>
              </Link>
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
        <Box>
          <Flex
            h={{ lg: "24vh", md: "19vh", sm: "19vh" }}
            justifyContent="space-around"
            alignItems="center"
          >
            <Flex direction="column" justifyContent="" alignItems="center">
              <Text fontSize="0.9rem">THE BRIBAL EDIT</Text>
              <Box w={{ lg: "25vw", md: "24vw" }}>
                <Text
                  textAlign="center"
                  fontSize={{ lg: "2rem", md: "1.2rem", sm: "1.3rem" }}
                >
                  Your down-the-aisle outfit is ready for you
                </Text>
              </Box>
            </Flex>

            <Flex direction="column" justifyContent="" alignItems="center">
              <Text fontSize="0.9rem">CHRISTIAN LOUBOUTIN'S LOUBI FAMILY</Text>
              <Box w={{ lg: "25vw", md: "24vw" }}>
                <Text
                  textAlign="center"
                  fontSize={{ lg: "2rem", md: "1.1rem", sm: "1.2rem" }}
                >
                  You never forget your first pair of Louboutins
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Grid
            gap={3}
            w="100%"
            h={{ lg: "115vh", md: "70vh", sm: "70vh" }}
            templateRows="repeat(2,1fr)"
            templateColumns="repeat(2,1fr)"
          >
            <GridItem rowSpan={2} w="100%">
              <Image src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/ActboxTall-StellaParty_2x_20221028105957.jpg?imwidth=600&imdensity=1"></Image>
            </GridItem>

            <GridItem>
              <Image
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/LoubiFamily_ActboxSmall_2x__20221031171804.jpg?imwidth=600&imdensity=1"
                alt="one"
              />
              <Flex
                borderBottom="1px solid gray"
                h={{ lg: "15vh", md: "10vh", sm: "10vh" }}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
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
            </GridItem>

            <GridItem w="100%">
              <Flex
                h={{ lg: "20vh", md: "12vh", sm: "12vh" }}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Stack w="25vw" justifyContent="center" alignItems="center">
                  <Text fontSize={{ lg: "1.1rem", md: "0.9rem", sm: "0.8rem" }}>
                    CHRISTIAN LOUBOUTIN'S LOUBI FAMILY
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize={{ lg: "2rem", md: "1.1rem", sm: "1.2rem" }}
                  >
                    Furry best friends deserve glamorous treats
                  </Text>
                </Stack>
              </Flex>
              <Image
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/LoubiFamily_ActboxSmall_2x_2_20221031171804.jpg?imwidth=600&imdensity=1"
                alt="two"
              />
            </GridItem>
          </Grid>

          <Flex
            borderBottom="1px solid black"
            h={{ lg: "18vh", md: "25vh" }}
            justifyContent="space-around"
            alignItems="center"
          >
            <Flex mt={{ lg: "0", md: "5rem" }}>
              <Link to="/womenproduct">
              
                <Button
              h={8}
              fontSize={13}
              borderRadius="none"
              mb="1.2rem"
              bgColor="black"
              color="white"
              colorScheme="black"
            >
              SHOP NOW
            </Button>
              </Link>
            </Flex>
            <Flex mt={{ lg: "0", md: "5rem" }}>
              <Link to="/womenproduct">
               
                <Button
              h={8}
              fontSize={13}
              borderRadius="none"
              mb="1.2rem"
              bgColor="black"
              color="white"
              colorScheme="black"
            >
              SHOP NOW
            </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>

        <Box>
          <Flex
            h={{ lg: "24vh", md: "19vh", sm: "19vh" }}
            justifyContent="space-around"
            alignItems="center"
          >
            <Flex direction="column" justifyContent="" alignItems="center">
              <Text fontSize="0.9rem">THE BRIBAL EDIT</Text>
              <Box w={{ lg: "25vw", md: "24vw" }}>
                <Text
                  textAlign="center"
                  fontSize={{ lg: "2rem", md: "1.2rem", sm: "1.3rem" }}
                >
                  Your down-the-aisle outfit is ready for you
                </Text>
              </Box>
            </Flex>
            <Flex direction="column" justifyContent="" alignItems="center">
              <Text fontSize="0.9rem">CHRISTIAN LOUBOUTIN'S LOUBI FAMILY</Text>
              <Box w={{ lg: "25vw", md: "24vw" }}>
                <Text
                  textAlign="center"
                  fontSize={{ lg: "2rem", md: "1.1rem", sm: "1.2rem" }}
                >
                  You never forget your first pair of Louboutins
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Grid
            gap={3}
            w="100%"
            h={{ lg: "115vh", md: "70vh", sm: "70vh" }}
            templateRows="repeat(2,1fr)"
            templateColumns="repeat(2,1fr)"
          >
            <GridItem rowSpan={2}>
              <Image src="https://img.mytheresa.com/media/static/raw/cms/l/Rick_Owens_Moncler/Moncler_Maya_ActboxTall_2x_20221102170308.jpg?imwidth=600&imdensity=1"></Image>
            </GridItem>

            <GridItem>
              <Image
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/Festive-Nov_ActboxSmall_GiftHIM_2x_20221028110222.jpg?imwidth=600&imdensity=1"
                alt="one"
              />
              <Flex
                borderBottom="1px solid gray"
                h={{ lg: "15vh", md: "10vh", sm: "10vh" }}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
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
            </GridItem>

            <GridItem w="100%">
              <Flex
                h={{ lg: "20vh", md: "12vh", sm: "12vh" }}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Stack w="25vw" justifyContent="center" alignItems="center">
                  <Text fontSize={{ lg: "1.1rem", md: "0.9rem", sm: "0.8rem" }}>
                    CHRISTIAN LOUBOUTIN'S LOUBI FAMILY
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize={{ lg: "2rem", md: "1.1rem", sm: "1.2rem" }}
                  >
                    Furry best friends deserve glamorous treats
                  </Text>
                </Stack>
              </Flex>
              <Image
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/Festive-Nov_ActboxSmall_GiftHER_2x_20221028110218.jpg?imwidth=600&imdensity=1"
                alt="two"
              />
            </GridItem>
          </Grid>

          <Flex
            borderBottom="1px solid black"
            h={{ lg: "18vh", md: "25vh" }}
            justifyContent="space-around"
            alignItems="center"
          >
            <Flex mt={{ lg: "0", md: "5rem" }}>
              <Link to="/womenproduct">
              
                <Button
              h={8}
              fontSize={13}
              borderRadius="none"
              mb="1.2rem"
              bgColor="black"
              color="white"
              colorScheme="black"
            >
              SHOP NOW
            </Button>
              </Link>
            </Flex>
            <Flex mt={{ lg: "0", md: "5rem" }}>
              <Link to="/women">
               
                <Button
              h={8}
              fontSize={13}
              borderRadius="none"
              mb="1.2rem"
              bgColor="black"
              color="white"
              colorScheme="black"
            >
              SHOP NOW
            </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>

        <Box mt={{ lg: "2rem", md: "1rem", sm: "1.9rem" }} mb={12} pt={5}>
          <Stack
            spacing={{ lg: "1", md: "0", sm: "0" }}
            margin="auto"
            justifyContent="center"
            alignItems="center"
            width="40vw"
          >
            <Text fontSize="0.9rem">URBAN JUNGLE</Text>
            <Text
              fontSize={{ lg: "2.1rem", md: "1.2rem", sm: "1.5rem" }}
              textAlign="center"
            >
              Consider this your armor for city streets
            </Text>
          </Stack>
          <Box mb={{ lg: "2.3rem", md: "0.8rem", sm: "0.8rem" }} mt="2rem">
            <Grid
              templateRows="repeat(1,1fr)"
              templateColumns="repeat(4,1fr)"
              gap="5"
            >
              <GridItem>
                <Image src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/CW44_FE_642x642_2x__20221028110023.jpg"></Image>
                <Text
                  fontSize={{ lg: "1.3rem", md: "1.1rem", sm: "1rem" }}
                  align="center"
                >
                  The Row
                </Text>
              </GridItem>
              <GridItem>
                {" "}
                <Image src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/CW44_FE_642x642_2x_2_20221028110023.jpg"></Image>
                <Text
                  fontSize={{ lg: "1.3rem", md: "1.1rem", sm: "1rem" }}
                  align="center"
                >
                  JW Anderson
                </Text>
              </GridItem>
              <GridItem>
                {" "}
                <Image src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/CW44_FE_642x642_2x_3_20221028110026.jpg"></Image>
                <Text
                  fontSize={{ lg: "1.3rem", md: "1.1rem", sm: "1rem" }}
                  align="center"
                >
                  Sacai
                </Text>
              </GridItem>
              <GridItem>
                {" "}
                <Image src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/CW44_FE_642x642_2x_4_20221028110025.jpg"></Image>
                <Text
                  fontSize={{ lg: "1.3rem", md: "1.1rem", sm: "1rem" }}
                  align="center"
                >
                  Celine Eyewear
                </Text>
              </GridItem>
            </Grid>
          </Box>

          <Center>
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
          </Center>
        </Box>

        <Center>
          <Box lineHeight="1rem">
            <Heading fontSize="15px" fontWeight="400" mb="0.5rem">
              MYTHERESA – WOMEN’S LUXURY AND DESIGNER FASHION
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

export default Women;
