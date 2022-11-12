import { Text } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Delivery from "../pages/Delivery";
import Pay from "../pages/Pay";
import Kids from "./Kids";
import KidsProduct from "./KidsProduct";
import Men from "./Men";
import MenProduct from "./MenProducts";
import SingleProd from "./Singleprod";
import Women from "./Women";
import WomenProduct from "./WomenProduct";

function Allroutes() {
  return (
    <>
      <Routes>
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/menproduct" element={<MenProduct />} />
        <Route path="/womenproduct" element={<WomenProduct />} />
        <Route path="/kidsproduct" element={<KidsProduct />} />
        <Route path="/:category/:id" element={<SingleProd />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/cart/delivery" element={<Delivery/>} />
        <Route path="/cart/delivery/pay" element={<Pay/>} />
        <Route path="/ordersummary" element={<Text>Summary</Text>} />
      </Routes>
    </>
  );
}

export default Allroutes;