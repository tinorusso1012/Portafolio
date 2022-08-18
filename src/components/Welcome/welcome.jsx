import React, { useEffect, useState } from "react";
import PC from "../../Imagenes/pngegg.png";
import Phone from "../../Imagenes/Phone.png";

import s from "./welcome.module.css";
import { useTypewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { SiGmail } from "react-icons/si";
function Welcome({ idioma }) {
  const { text } = useTypewriter({
    words: [
      idioma ? "Fullstack Web Developer 😎." : "Desarrolador Web Fullstack 😎.",
      idioma ? "Frontend Web Developer🤩." : "Desarrolador Web Front-End🤩.",
      idioma ? "Backend Web Developer 😏." : "Desarrolador Web Back-End 😏.",
    ],
    loop: 0,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 4000,
  });

  const { TextoEspañol } = useTypewriter({
    words: [
      "Desarrolador Web Fullstack 😎.",
      "Desarrolador Web Front-End🤩.",
      "Desarrolador Web Back-End 😏.",
    ],
    loop: 0,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 4000,
  });

  const [tipeo, setTipeo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTipeo(true);
    }, 7500);
  }, []);

  return (
    <>
      <div className={s.DivPrincipal}>
        <div className={s.DivResponsivePhone}>
          <img src={Phone} className={s.imagePhone}></img>
        </div>
        <div className={s.divImagen}>
          <img src={PC} className={s.image}></img>
        </div>
        <div className={s.divText}>
          {idioma ? (
            <span className={s.text}>
              {<p className={s.ptag}>{"<h1>"}</p>} Hey 👋 I'm Valentino,
              {<p className={s.ptag}>{"</h1>"}</p>} <br></br>{" "}
              {<p className={s.ptag}>{"<h2>"}</p>}
              {text}
              {<p className={s.ptag}>{"</h2>"}</p>}
            </span>
          ) : (
            <span className={s.text}>
              {<p className={s.ptag}>{"<h1>"}</p>} Hola 👋 Soy Valentino,
              {<p className={s.ptag}>{"</h1>"}</p>} <br></br>{" "}
              {<p className={s.ptag}>{"<h2>"}</p>}
              {text}
              {<p className={s.ptag}>{"</h2>"}</p>}
            </span>
          )}
          <div className={s.icons}>
            <a
              className={s.as}
              href="https://github.com/tinorusso1012"
              target="blank"
            >
              <FaGithub className={s.UnicIcon} />
            </a>
            <a
              className={s.as}
              href="https://www.linkedin.com/in/valentinorusso/"
              target="blank"
            >
              <FaLinkedin className={s.UnicIcon} />
            </a>
            <a
              className={s.as}
              href="mailto:valentinorusso2002@gmail.com"
              target="blank"
            >
              <SiGmail className={s.UnicIcon} />
            </a>
          </div>
        </div>
        <div className={s.iconsResponsive}>
          <div className={s.iconsResponsive2}>
            <a
              className={s.as}
              href="https://github.com/tinorusso1012"
              target="blank"
            >
              <FaGithub className={s.UnicIconResponsive} />
            </a>
            <a
              className={s.as}
              href="https://www.linkedin.com/in/valentinorusso/"
              target="blank"
            >
              <FaLinkedin className={s.UnicIconResponsive} />
            </a>
            <a
              className={s.as}
              href="mailto:valentinorusso2002@gmail.com"
              target="blank"
            >
              <SiGmail className={s.UnicIconResponsive} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
