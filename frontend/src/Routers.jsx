import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeFour from "./pages/homePages/HomeFour";
import ServicesDetails from "./pages/servicesPages/ServicesDetails";
// import ServiceDetailCon from "./pages/servicesPages/ServiceDetailCon";
import ServiceDetailBrand from "./pages/servicesPages/ServiceDetailBrand";
import ServiceDetailIT from "./pages/servicesPages/ServiceDetailIT";
import ServiceDetailRecruit from "./pages/servicesPages/ServiceDetailRecruit";
import Error404 from "./pages/error/Error404";
import ServiceDetailCon from "./pages/servicesPages/ServiceDetailCon";
import Contact from "./pages/contact/Contact";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeFour />}></Route>
        {/* <Route path='/home-2' element={<HomeTwo />}></Route>
                <Route path='/home-3' element={<HomeThree />}></Route> */}
        <Route
          path="/marketEntry-service"
          element={<ServicesDetails />}
        ></Route>
        <Route
          path="/consulting-service"
          element={<ServiceDetailCon />}
        ></Route>
        <Route
          path="/branding-service"
          element={<ServiceDetailBrand />}
        ></Route>
        <Route path="/itTraining-service" element={<ServiceDetailIT />}></Route>
        <Route
          path="/recruitment-service"
          element={<ServiceDetailRecruit />}
        ></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
