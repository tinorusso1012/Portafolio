import React from "react";
import s from "./navbar.module.css";
import iconCV from "../../Imagenes/iconCV.png";
export default function Navbar() {
  return (
    <div className={s.divPrincipal}>
      <img className={s.icono} src={iconCV} />
      <nav>
        <ul className={s.ulNav}>
          <li>
            <a href="#Welcome" className={s.NavGo}>
              Home
            </a>
          </li>
          <li>
            <a className={s.NavGo}>About Me</a>
          </li>
          <li>
            <a className={s.NavGo}>Proyects</a>
          </li>
          <li>
            <a className={s.NavGo}>Skills</a>
          </li>
          <li>
            <a className={s.NavGo}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
