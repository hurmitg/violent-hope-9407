import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import women from "./women.json";
import accessories from "./womenaccessories.json";
import men from "./men.json";
import Poster4 from "./Poster4";
import Poster from "./Poster";
import Poster2 from "./Poster2";
import Poster3 from "./Poster3";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Layout() {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   Fetch();
  // }, []);
  // async function Fetch() {
  //   try {
  //     let res = await axios.get("http://localhost:8080/api/products");
  //     setData(res.data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }
  // console.log(data, "me data hooooooooooooooooooooon");

  const image1 =
    "https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG1/TABLET_2x_20221107134847.jpg?imwidth=1024&imdensity=1";
  const image2 =
    "https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG3/BIG_3_2x_20221107171209.jpg?imwidth=1180&imdensity=1";
  const image3 =
    "https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG2/DESKTOP_2X_20221107170819.jpg?imwidth=1180&imdensity=1";
  const image4 =
    "https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW45/Big_Gucci-Decor-desktop_2x_20221107085555.jpg?imwidth=1180&imdensity=1";
  return (
    <Box>
      <Link to="/men">
        <Poster image={image1} />
      </Link>
      <Carousel data={men} />
      <Link to="women">
        <Poster2 image={image2} />
      </Link>
      <Carousel data={women} />

      <Link to="women">
        <Poster3 image={image3} />
      </Link>
      <Carousel data={accessories.reverse()} />
      {/* <Poster4 image={image4} /> */}
    </Box>
  );
}
