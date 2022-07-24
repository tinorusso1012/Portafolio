import React, { useEffect, useState } from "react";
import PC from "../../Imagenes/pngegg.png";
import Phone from "../../Imagenes/";

import s from "./welcome.module.css";
import { useTypewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Welcome() {
  const { text } = useTypewriter({
    words: [
      "Fullstack Web Developer 😎.",
      "Frontend Web Developer🤩.",
      "Backend Web Developer 😏.",
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
          <span className={s.text}>
            {<p className={s.ptag}>{"<h1>"}</p>} Hey 👋 I'm Valentino,
            {<p className={s.ptag}>{"</h1>"}</p>} <br></br>{" "}
            {<p className={s.ptag}>{"<h2>"}</p>}
            {text}
            {<p className={s.ptag}>{"</h2>"}</p>}
          </span>
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
