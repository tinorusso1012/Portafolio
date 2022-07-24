import React from "react";
import s from "./aboutme.module.css";
import yo from "../../Imagenes/IMG_20210616_143409_996.jpg";
export default function Aboutme() {
  return (
    <div className={s.divPrincipal}>
      <div className={s.divAboutResponsive}>
        <h1>About Me:</h1>
      </div>
      <div className={s.divImagenResponsive}>
        <img className={s.imagenResponsive} src={yo} />
      </div>
      <div className={s.divWriteResponsive}>
        <div className={s.divWriteResponsive2}>
        <h4 className={s.WriteResponsive}>
          Hi! My Name is Valentino and I am a <b>Fullstack Web Developer</b>.
          Although I enjoy working on both sides, <b>Frontend</b> and{" "}
          <b>Backend</b>, I feel a bit more comfortable on the <b>Backend</b>{" "}
          side. I am fascinated by the programming world. I am a proactive
          person who is always looking to learn and grow, both professionally
          and personally. I feel identified with a phrase that I read and share:
          "Nothing in the world can take the place of perseverance." I
          characterize myself for always being responsible, well predisposed and
          committed to my tasks, and easy to adapt to new work teams.
        </h4>
        </div>
        <div className={s.botonesResponsive}>
          <a
            className={s.iconoResponsive}
            href="https://drive.google.com/drive/folders/1QkvMnpCfEDhLdh52GYizlEWV6N3spDe2?usp=sharing"
            target="_blank"
          >
            <button className={s.btnResponsive}>View Resume</button>
          </a>
          <a
            className={s.iconoResponsive}
            href="https://certificates.soyhenry.com/cert?id=8f81e037-4e2f-42b6-8ad2-a26ab90fbb56"
            target="_blank"
          >
            <button className={s.btnResponsive}>View Certificate</button>
          </a>
        </div>
      </div>
      <div className={s.divImagen}>
        <img className={s.imagen} src={yo} />
      </div>
      <div className={s.todojunto}>
        <div className={s.divAbout}>
          <h1>About Me:</h1>
        </div>
        <div className={s.divWrite}>
          <h4 className={s.Write}>
            Hi! My Name is Valentino and I am a <b>Fullstack Web Developer</b>.
            Although I enjoy working on both sides, <b>Frontend</b> and{" "}
            <b>Backend</b>, I feel a bit more comfortable on the <b>Backend</b>{" "}
            side. I am fascinated by the programming world. I am a proactive
            person who is always looking to learn and grow, both professionally
            and personally. I feel identified with a phrase that I read and
            share: "Nothing in the world can take the place of perseverance." I
            characterize myself for always being responsible, well predisposed
            and committed to my tasks, and easy to adapt to new work teams.
          </h4>
          <div className={s.botones}>
            <a
              className={s.icono}
              href="https://drive.google.com/drive/folders/1QkvMnpCfEDhLdh52GYizlEWV6N3spDe2?usp=sharing"
              target="_blank"
            >
              <button className={s.btn}>View Resume</button>
            </a>
            <a
              className={s.icono}
              href="https://certificates.soyhenry.com/cert?id=8f81e037-4e2f-42b6-8ad2-a26ab90fbb56"
              target="_blank"
            >
              <button className={s.btn}>View Certificate</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
