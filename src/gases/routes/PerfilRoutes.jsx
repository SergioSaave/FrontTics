import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage, IndexPage } from "../pages";
import { Aside } from "../../ui/components/Aside";
import { PruebaPage } from "../pages/PruebaPage";

export const PerfilRoutes = () => {
  return (
    <div className="aside mx-48 mt-28">
      <Aside />
      <div className="text-justify">
        <Routes>
          <Route path="mis-datos" element={<PruebaPage />} />
          <Route path="uso" element={<PruebaPage />} />
          <Route path="pf" element={<PruebaPage />} />
          <Route path="/*" element={<IndexPage />} />
        </Routes>
      </div>
    </div>
  );
};
