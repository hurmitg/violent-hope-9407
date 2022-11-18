import { Text } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../Landing Page/Layout";
import LoginMain from "../Login/Main";
import PrivateRoute from "../Private/PrivateRoute";

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
import Summary from "../pages/Summary";
import ErrorPage from "./404 Page/ErrorPage";

function Allroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginMain />} />
        <Route
          path="/men"
          element={
            // <PrivateRoute>

            <Men />
            /* </PrivateRoute> */
          }
        />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/menproduct" element={<MenProduct />} />
        <Route path="/womenproduct" element={<WomenProduct />} />
        <Route path="/kidsproduct" element={<KidsProduct />} />
        <Route path="/:category/:id" element={<SingleProd />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart/delivery"
          element={
            <PrivateRoute>
              <Delivery />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart/delivery/pay"
          element={
            <PrivateRoute>
              <Pay />
            </PrivateRoute>
          }
        />
        <Route
          path="/ordersummary"
          element={
            <PrivateRoute>
              <Summary />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
}

export default Allroutes;
