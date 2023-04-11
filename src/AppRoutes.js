import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
const ProviderComponent = lazy(() => import("./components/Provider/"));
const StoreComponent = lazy(() => import("./components/Store/"));
const Home = lazy(() => import("./components/Home/"));
const NotFound = lazy(() => import("./components/NotFound"));

const AppRoutes = () => {
  return (
     
      <Suspense fallback={<div>Loading content ...</div>}>
         <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/store" element={<StoreComponent />} />
          <Route path="/provider" element={<ProviderComponent />} />
          <Route path="*" element={<NotFound/>} />
        </Routes> 
      </Suspense>
    
  )
};
export default AppRoutes;