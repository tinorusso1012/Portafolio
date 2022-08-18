import React, { useState } from "react";
import Navbar from "../NavBar/navbar";
import Welcome from "../Welcome/welcome";
import s from "./home.module.css";
import Aboutme from "../AboutMe/aboutme";
import Proyects from "../Proyects/Proyects";
import Skills from "../MySkills/Skills";
import Contact from "../Contact/Contact";
import iconCV from "../../Imagenes/iconCV.png";
import iconMIO from "../../Imagenes/Screenshot_20220817-015020_Chrome-01.jpeg";
import Button from "../Button/Button";
// 7ae582c color
export default function Home() {
  const [check, setCheck] = useState(true);
  console.log(check);
  const Checked = (checked) => {
    setCheck(checked);
  };
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
          <img className={s.img} src={iconMIO} />{" "}
        </a>
        <nav className={s.NavDiv}>
          {check ? (
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
          ) : (
            <ul className={s.ulNav}>
              <li>
                <a href="#Welcome" className={s.NavGo}>
                  Principal
                </a>
              </li>
              <li>
                <a href="#Aboutme" className={s.NavGo}>
                  Sobre mi
                </a>
              </li>
              <li>
                <a href="#Proyects" className={s.NavGo}>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#Skills" className={s.NavGo}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#Contact" className={s.NavGo}>
                  Contacto
                </a>
              </li>
            </ul>
          )}
          <div className={s.botonidioma}>
            <Button functionChange={Checked} checkeded={check} />
          </div>
        </nav>
      </div>
      <br />
      {/* Fin Nav */}
      <br id="Welcome" />
      <Welcome idioma={check} />
      <br />
      <br />
      <br id="Aboutme" />
      <Aboutme idioma={check} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br id="Proyects" />
      <Proyects idioma={check} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <div className={s.divLinea}>
        <div className={s.linea} />
      </div> */}
      <br id="Skills" />
      <Skills idioma={check} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br id="Contact" />
      <Contact idioma={check} />
    </div>
  );
}
