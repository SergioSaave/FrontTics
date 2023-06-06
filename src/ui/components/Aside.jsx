import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/Auth";

export const Aside = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onCloseSesion = () => {
    logout();
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div>
      <h1 className="font-bold text-center text-2xl">Mi Sensor</h1>
      <div>
        <nav>
          <ul className="grid grid-rows-4 p-4">
            <li>
              <NavLink
                to="/perfil/mis-datos"
                className="block py-2 pl-3 pr-4 text-blue-600"
                aria-current="page"
              >
                Mi Sensor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/perfil/uso"
                className="block py-2 pl-3 pr-4 text-blue-600"
              >
                Modos de uso
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/perfil/pf"
                className="block py-2 pl-3 pr-4 text-blue-600"
              >
                Preguntas Frecuentes
              </NavLink>
            </li>
            <li>
              <button
                className="block py-2 pl-3 pr-4 text-blue-600"
                onClick={onCloseSesion}
              >
                Cerrar Sesion
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
