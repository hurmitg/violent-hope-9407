import { Box } from '@chakra-ui/react'
import React from 'react'
import Poster from './Poster'
import Poster2 from './Poster2'
import Poster3 from './Poster3'

export default function Layout() {
    const image1="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG1/TABLET_2x_20221107134847.jpg?imwidth=1024&imdensity=1"
     const image2="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG3/BIG_3_2x_20221107171209.jpg?imwidth=1180&imdensity=1"
     const image3="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG2/DESKTOP_2X_20221107170819.jpg?imwidth=1180&imdensity=1"
  return (
    <Box>
        <Poster image={image1}/>
        <Poster2 image={image2}/>
        <Poster3 image={image3}/>
       

    </Box>
  )
}
