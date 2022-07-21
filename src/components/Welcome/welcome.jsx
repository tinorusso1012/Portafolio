import React, { useEffect, useState } from "react";
import PC from "../../../Imagenes/pngegg.png";
import s from "./welcome.module.css";
import { useTypewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Welcome() {
  const { text } = useTypewriter({
    words: [
      "<h2>Fullstack Web Developer 😎.</h2>",
      "<h3>Frontend Web Developer🤩.</h3>",
      "<h4>Backend Web Developer 😏.</h4>",
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
    <div className={s.DivPrincipal}>
      <div className={s.divImagen}>
        <img src={PC} className={s.image}></img>
      </div>
      <div className={s.divText}>
        <span className={s.text}>
          {"<h1>"} Hey 👋 I'm Valentino,{"</h1>"} <br></br> {text}
        </span>
        <div className={s.icons}>
          <a className={s.as} href="https://github.com/tinorusso1012" target="blank">
            <FaGithub className={s.UnicIcon} />
          </a>
          <a  className={s.as} href="https://www.linkedin.com/in/valentinorusso/" target="blank">
            <FaLinkedin className={s.UnicIcon} />
          </a>
          <a  className={s.as} href="mailto:valentinorusso2002@gmail.com" target="blank">
            <SiGmail className={s.UnicIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
