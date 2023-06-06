import React from "react";
import { Navbar } from "../../ui/components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { IndexPage, AboutPage, ContactPage, ServicesPage } from "../pages";
import { PrivateRoutes } from "../../router/PrivateRoutes";
import { PerfilRoutes } from "./PerfilRoutes";

export const GasesRoutes = () => {
  return (
    <>
      <div className="mt-24">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="acerca" element={<AboutPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="servicio" element={<ServicesPage />} />

        {/* Subrutas de perfil (no puede haber una pagina para perfil) */}
        <Route path="perfil/*" element={<PerfilRoutes />} />

        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
