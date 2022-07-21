import React from "react";
import s from "./aboutme.module.css";
import yo from "../../Imagenes/IMG_20210616_143409_996.jpg";
export default function Aboutme() {
  return (
    <div className={s.divPrincipal}>
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
            <button className={s.btn}>View Resume</button>
            <button className={s.btn}>View Certificate</button>
          </div>
        </div>
      </div>
    </div>
  );
}
