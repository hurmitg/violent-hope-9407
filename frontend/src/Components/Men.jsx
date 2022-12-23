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
import React from "react";
import Corousel from "./Corousel";
import { Link } from "react-router-dom";
import Carousel from "../Landing Page/Carousel";
import men from "../Landing Page/Data/men.json";
import Navbar2 from "./dropdownNav/Navbar2";
function Men() {
  document.title="Men's Luxury Fashion & Designer Shopping | Violent Hope"
  return (
    <>
     <Link to="/menproduct"><Navbar2/></Link>
      <Box w={{ lg: "75%", md: "100%", sm: "100%" }} margin="auto" >
        <Flex
          h={{ lg: "71vh", md: "46vh", sm: "46vh" }}
          direction="column"
          w="100%"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage={
            "https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG1/DESKTOP_2x_20221107134833.jpg?imwidth=1180&imdensity=1"
          }
        >
          <Flex
            width="100%"
            direction="column"
            marginTop="5rem"
            marginLeft="3rem"
          >
            <Stack spacing={2} marginTop="3rem">
              <Text
                color="white"
                textAlign="left"
                letterSpacing={{ lg: "1", md: "0" }}
              >
                _THE EXCLUSIVE CAPSULE COLLECTION
              </Text>
              <Text
                color="white"
                fontSize={{ lg: "55", md: "35", sm: "33" }}
                textAlign="left"
              >
                {" "}
                Marni x Mytheresa Men
              </Text>
            </Stack>
           
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
          </Flex>
        </Flex>
        <Carousel link={"/men"} title="men's Collection" data={men}/>

        <Center>
          <Box>
            <Heading fontWeight="400" fontSize="35px" mt="2rem">
              New Arrivals
            </Heading>

           
  

            <Center>
              <Link to="/menproduct">
              
                <Link to="/menproduct">
                  <Button
                    h={8}
                    fontSize={13}
                    borderRadius="none"
                    bgColor="black"
                   
                    color="white"
                    mt={["1rem", "1.2rem", "1.2rem", "1.2rem"]}
                    mb={["1rem"]}
                  >
                      VIEW ALL
                  </Button>
                </Link>
              </Link>
            </Center>
          </Box>
        </Center>

        <Center mt="3rem" w={["90%","90%","90%","100%"]} margin="auto" >
          <Flex flexDirection={["column","column","row","row"]}  >
            <Box
              color="white"
              bgColor="black"
              width={["100%","100%","50%","50%"]}
              paddingTop={{ lg: "10rem", md: "6rem", sm: "5rem" }}
              paddingLeft={{ lg: "4rem", md: "4rem", sm: "4rem" }}
              lineHeight="3rem"
              fontSize="28px"
            >
              {" "}
              <Heading
                fontWeight="500"
                fontSize={["10px","22px","35px","53px"  ]}
                mt="1rem"
              >
                The perfect gift
              </Heading>
              <Text fontWeight="400" fontSize="14px">
                The pieces to add to your wishlist
              </Text>
              <Link to="/menproduct">
                  <Button
                    h={8}
                    fontSize={13}
                    borderRadius="none"
                    bgColor="white"
                   
                    color="black"
                    mt={["1rem", "1.2rem", "1.2rem", "1.2rem"]}
                    mb={["1rem"]}
                  >
                      VIEW ALL
                  </Button>
                </Link>
            </Box>
            <Image
              src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW50/FLYOUTS/BRUNELLO_20221213151310.jpg"
              width={["100%","100%","50%","50%"]}
              
            ></Image>
          </Flex>
        </Center>
        <Carousel link={"/men"} title="men's Collection" data={men}/>
        <Box mt="2rem" mb="2rem">
          {/* <Corousel /> */}
        </Box>
        <Center mt="3rem"  w={["90%","90%","90%","100%"]} margin="auto">
          <Flex flexDirection={["column","column","row","row"]} >
            <Image
              src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG3/BIG_3_2x_20221107171209.jpg?imwidth=1180&imdensity=1"
              width={["100%","100%","50%","50%"]}
            ></Image>
            <Box
              color="white"
              bgColor="black"
              width={["100%","100%","50%","50%"]}
              paddingTop={{ lg: "10rem", md: "6rem", sm: "5rem" }}
              paddingLeft={{ lg: "4rem", md: "4rem", sm: "4rem" }}
              lineHeight="3rem"
              fontSize="28px"
              mr="1rem"
            >
              {" "}
              <Heading
                fontWeight="500"
                mt="1rem"
                fontSize={["10px","22px","35px","53px"  ]}
              >
                Statement pants
              </Heading>
              <Text fontWeight="400" fontSize="14px">
                The pieces to add to your wishlist
              </Text>
              <Link to="/menproduct">
                  <Button
                    h={8}
                    fontSize={13}
                    borderRadius="none"
                    bgColor="white"
                   
                    color="black"
                    mt={["1rem", "1.2rem", "1.2rem", "1.2rem"]}
                    mb={["1rem"]}
                  >
                      VIEW ALL
                  </Button>
                </Link>
            </Box>
          </Flex>
        </Center>
        <Carousel link={"/men"} title="men's Collection" data={men}/>
        <Box mt="2rem" mb="2rem">
          {/* <Corousel /> */}
        </Box>
        <Center>
        <Link to="/menproduct">
                  <Button
                    h={8}
                    fontSize={13}
                    borderRadius="none"
                    bgColor="black"
                   
                    color="white"
                    mt={["1rem", "1.2rem", "1.2rem", "1.2rem"]}
                    mb={["1rem"]}
                  >
                      SHOP NOW
                  </Button>
                </Link>
        </Center>

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

export default Men;
