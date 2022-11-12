import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Landing Page/Layout";
import LoginMain from "../Login/Main";
import PrivateRoute from "../Private/PrivateRoute";
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
        <Route path="/" element={<Layout />}/>
        <Route path="/login" element={<LoginMain/>}/>
        <Route path="/men" element={
          <PrivateRoute>  <Men /></PrivateRoute>
      } />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/menproduct" element={<MenProduct />} />
        <Route path="/womenproduct" element={<WomenProduct />} />
        <Route path="/kidsproduct" element={<KidsProduct />} />
        <Route path="/:category/:id" element={<SingleProd />} />
      </Routes>
    </>
  );
}

export default Allroutes;
