import React from "react";
import { Route, Routes } from "react-router-dom";
import { IndexPage, MiSensorPage, ModosDeUsoPage, PreguntasFrecuentesPage } from "../pages";
import { Aside } from "../../ui/components/Aside";

export const PerfilRoutes = () => {
  return (
    <div className="aside mx-48 mt-28">
      <Aside />
      <div className="text-justify">
        <Routes>
          <Route path="mis-datos" element={<MiSensorPage />} />
          <Route path="uso" element={<ModosDeUsoPage />} />
          <Route path="pf" element={<PreguntasFrecuentesPage />} />
          <Route path="/*" element={<IndexPage />} />
        </Routes>
      </div>
    </div>
  );
};
