import React from "react";
import Navbar from "../NavBar/navbar";
import Welcome from "../Welcome/welcome";
import s from "./home.module.css";
import Aboutme from "../AboutMe/aboutme";
import Proyects from "../Proyects/Proyects";
import Skills from "../MySkills/Skills";
import Contact from "../Contact/Contact";
import iconCV from "../../Imagenes/iconCV.png";

export default function Home() {
  return (
    <div className={s.divContenedor}>
      {/* <Navbar className={s.navbar} /> */}

      {/* Comienzo nav */}

      <div className={s.divPrincipal}>
      <a
          className={s.icono}
          href="https://drive.google.com/drive/folders/1QkvMnpCfEDhLdh52GYizlEWV6N3spDe2?usp=sharing"
          target="_blank"
        >
          <img className={s.img} src={iconCV} />{" "}
        </a>
          <ul className={s.ulNav}>
            <li>
              <a href="#Welcome" className={s.NavGo}>
                Home
              </a>
            </li>
            <li>
              <a href="#Aboutme" className={s.NavGo}>
                About Me
              </a>
            </li>
            <li>
              <a href="#Proyects" className={s.NavGo}>
                Proyects
              </a>
            </li>
            <li>
              <a href="#Skills" className={s.NavGo}>
                Skills
              </a>
            </li>
            <li>
              <a href="#Contact" className={s.NavGo}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Fin Nav */}
      <br id="Welcome" />
      <Welcome />
      <div className={s.divLinea}>
        <div className={s.linea} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br id="Aboutme" />
      <Aboutme />
      <br />
      <br />
      <br />
      <br />
      <div className={s.divLinea}>
        <div className={s.linea} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br id="Proyects" />
      <Proyects />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={s.divLinea}>
        <div className={s.linea} />
      </div>
      <br id="Skills" />
      <Skills />
      <br />
      <br />
      <br />
      <div className={s.divLinea}>
        <div className={s.linea} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br id="Contact" />
      <Contact />
    </div>
  );
}
