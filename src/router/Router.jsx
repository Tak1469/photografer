import React from "react";
import { Route, Routes } from "react-router-dom";

import { About } from "../component/pages/About";
import { Home } from "../component/pages/Home";
import { Portfolio } from "../component/pages/Portfolio";
import { MainLayaout } from "../component/template/layout/MainLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayaout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}