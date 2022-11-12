import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";

import Poster from "./Poster";
import Poster2 from "./Poster2";
import Poster3 from "./Poster3";
import axios from "axios";
export default function Layout() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Fetch()
  }, []);
  async function Fetch(){
    try {
      let res = await axios.get("http://localhost:8080/api/products");
      setData(res.data);
    } catch (e) {
      console.log(e.message);
    }

  }
  console.log(data, "me data hooooooooooooooooooooon");

  const image1 =
    "https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG1/TABLET_2x_20221107134847.jpg?imwidth=1024&imdensity=1";
  const image2 =
    "https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG3/BIG_3_2x_20221107171209.jpg?imwidth=1180&imdensity=1";
  const image3 =
    "https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG2/DESKTOP_2X_20221107170819.jpg?imwidth=1180&imdensity=1";
  return (
    <Box>
      <Poster image={image1} />
       <Carousel data={data}/>
      <Poster2 image={image2} />
      <Carousel data={data.reverse()}/>
      <Poster3 image={image3} />
      <Carousel data={data}/>
    </Box>
  );
}
