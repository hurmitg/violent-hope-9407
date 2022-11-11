import React, { useState } from "react";
import { Box, IconButton, SimpleGrid, useBreakpointValue,Heading, Button } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import ProductCard from "./ProductCard";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,

  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplaySpeed: 5000,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  let arr = [
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/4c/P00674504.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/30/P00675265.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/e4/P00701157.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/1e/P00737342.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/4c/P00674504.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/30/P00675265.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/e4/P00701157.jpg",
    "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/1e/P00737342.jpg",
  ];

  return (
    
      
     
    <Box
      position={"relative"}
      height={"70vh"}
      width={"80%"}
      m="auto"
      mt="5%"
      overflow={"hidden"}
      textAlign={"center"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <Heading fontWeight={200}>New Arrivals</Heading>
      <IconButton
        aria-label="left-arrow"
        colorScheme="none"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        _hover={{bg:"none"}}
        bg={"transparent"}
        
        transform={"translate(0%,10%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        >
        <IoIosArrowBack  color="#111" fontSize={"3rem"}   onClick={() => slider?.slickPrev()} />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="none"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        
        _hover={{bg:"none"}}
        bg={"transparent"}
        transform={"translate(0%, 10%)"}
        
        zIndex={2}
        onClick={() => slider?.slickNext()}
        >
        <IoIosArrowForward color="#111" fontSize={"3rem"}  />
      </IconButton>
      {/* Slider */}
      
       
      <Slider {...settings} ref={(slider) => setSlider(slider)}>

        {arr.map((url, index) => (
          <Box  p="1rem"  h="70vh" >
            <ProductCard url={url} />
          </Box>
        ))}
      </Slider>
     
    </Box>
  
  );
}
