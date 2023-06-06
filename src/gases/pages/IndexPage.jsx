import React from "react";
import aos from "aos";
import { Presentacion, Productos } from "../components";

aos.init();

export const IndexPage = () => {
  return (
    <>
      <Presentacion />
      <Productos />
    </>
  );
};
