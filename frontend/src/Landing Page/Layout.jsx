import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import women from "./Data/women.json";
import accessories from "./Data/womenaccessories.json";
import men from "./Data/men.json";
import Poster4 from "./Poster4";
import Poster from "./Poster";
import Poster2 from "./Poster2";
import Poster3 from "./Poster3";
import axios from "axios";
import { Link } from "react-router-dom";
import children from "./Data/Kids.json";
export default function Layout() {
  const kids = {
    image:
      "https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_KIDS_DSK_2x_20220908102616.jpg?imwidth=1180&imdensity=1",
    title: "Kids",
    
  };
  const Life = {
    image:
      "https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_LIFE_DSK_2x_20220908102608.jpg?imwidth=1180&imdensity=1",
    title: "Life",
    
  };
  const mens = {
    image:
      "https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_DSK_2x_20220908102600.jpg?imwidth=1180&imdensity=1",
    title: "Men",
    title2: "Women",
  };
  return (
    <Box>
      <Poster2 data={mens} />
      <Poster data={kids} />
      <Poster data={Life} />

      <Carousel link={"/men"} title="Men's Collection" data={men} />
      <Carousel link={"/women"} title="Women's Collection" data={women} />
      <Carousel link={"/kids"} title="Kid's Collection" data={children} />

      <Carousel link={"/accessories"} title="Life New Arrivals" data={accessories.reverse()} />
      {/* <Poster4 image={image4} /> */}
    </Box>
  );
}
