import React from "react";
import s from "./aboutme.module.css";
import yo from "../../Imagenes/IMG_20210616_143409_996.jpg";
import me from "../../Imagenes/ImagenMia2.jpg";
export default function Aboutme({ idioma }) {
  return (
    <div className={s.divPrincipal}>
      <div className={s.divAboutResponsive}>
        {idioma ? <h1>About Me:</h1> : <h1>Sobre Mi</h1>}
      </div>
      <div className={s.divImagenResponsive}>
        <img className={s.imagenResponsive} src={yo} />
      </div>
      <div className={s.divWriteResponsive}>
        <div className={s.divWriteResponsive2}>
          {idioma ? (
            <h4 className={s.WriteResponsive}>
              Hi! My Name is Valentino and I am a <b>Fullstack Web Developer</b>
              . Although I enjoy working on both sides, <b>Frontend</b> and{" "}
              <b>Backend</b>, I feel a bit more comfortable on the{" "}
              <b>Backend</b> side. I am fascinated by the programming world. I
              am a proactive person who is always looking to learn and grow,
              both professionally and personally. I feel identified with a
              phrase that I read and share: "Nothing in the world can take the
              place of perseverance." I characterize myself for always being
              responsible, well predisposed and committed to my tasks, and easy
              to adapt to new work teams.
            </h4>
          ) : (
            <h4 className={s.WriteResponsive}>
              {" "}
              ¡Hola! Mi nombre es Valentino y soy un{" "}
              <b>desarrollador web Fullstack</b>. Aunque disfruto trabajando en
              ambos lados, <b>Frontend</b> y <b>Backend</b>, me siento un poco
              más cómodo en el <b>Backend</b>. Me fascina el mundo de la
              programación. soy una persona proactiva que siempre está buscando
              aprender y crecer, tanto profesionalmente como personalmente. Me
              siento identificado con una frase que leí: "Nada en el mundo puede
              reemplazar a la perseverancia". yo Me caracterizo por ser siempre
              responsable, bien predispuesto y comprometido con mis tareas,
              tambien me adapto facil a los trabajos en equipo.
            </h4>
          )}
        </div>
        <div className={s.botonesResponsive}>
          <a
            className={s.iconoResponsive}
            href="https://drive.google.com/drive/folders/1QkvMnpCfEDhLdh52GYizlEWV6N3spDe2?usp=sharing"
            target="_blank"
          >
            {idioma ? (
              <button className={s.btnResponsive}>View Resume</button>
            ) : (
              <button className={s.btnResponsive}>Ver Curriculum</button>
            )}
          </a>
          <a
            className={s.iconoResponsive}
            href="https://certificates.soyhenry.com/cert?id=8f81e037-4e2f-42b6-8ad2-a26ab90fbb56"
            target="_blank"
          >
            {idioma ? (
              <button className={s.btnResponsive}>View Certificate</button>
            ) : (
              <button className={s.btnResponsive}>Ver Certificado</button>
            )}
          </a>
        </div>
      </div>
      <div className={s.divImagen}>
        <img className={s.imagen} src={me} />
      </div>
      <div className={s.todojunto}>
        <div className={s.divAbout}>
          {idioma ? <h1>About Me:</h1> : <h1>Sobre Mi</h1>}
        </div>
        <div className={s.divWrite}>
          {idioma ? (
            <h4 className={s.Write}>
              Hi! My Name is Valentino and I am a <b>Fullstack Web Developer</b>
              . Although I enjoy working on both sides, <b>Frontend</b> and{" "}
              <b>Backend</b>, I feel a bit more comfortable on the{" "}
              <b>Backend</b> side. I am fascinated by the programming world. I
              am a proactive person who is always looking to learn and grow,
              both professionally and personally. I feel identified with a
              phrase that I read and share: "Nothing in the world can take the
              place of perseverance." I characterize myself for always being
              responsible, well predisposed and committed to my tasks, and easy
              to adapt to new work teams.
            </h4>
          ) : (
            <h4 className={s.Write}>
              ¡Hola! Mi nombre es Valentino y soy un{" "}
              <b>desarrollador web Fullstack</b>. Aunque disfruto trabajando en
              ambos lados, <b>Frontend</b> y <b>Backend</b>, me siento un poco
              más cómodo en el <b>Backend</b>. Me fascina el mundo de la
              programación. soy una persona proactiva que siempre está buscando
              aprender y crecer, tanto profesionalmente como personalmente.
              <br />
              Me siento identificado con una frase que leí: "Nada en el mundo
              puede reemplazar a la perseverancia". yo Me caracterizo por ser
              responsable,predispuesto y comprometido con mis tareas, tambien me
              adapto facil a los trabajos en equipo.
            </h4>
          )}
          <div className={s.botones}>
            <a
              className={s.icono}
              href="https://drive.google.com/drive/folders/1QkvMnpCfEDhLdh52GYizlEWV6N3spDe2?usp=sharing"
              target="_blank"
            >
              {idioma ? (
                <button className={s.btn}>View Resume</button>
              ) : (
                <button className={s.btn}>Ver Curriculum</button>
              )}
            </a>
            <a
              className={s.icono}
              href="https://certificates.soyhenry.com/cert?id=8f81e037-4e2f-42b6-8ad2-a26ab90fbb56"
              target="_blank"
            >
              {idioma ? (
                <button className={s.btn}>View Certificate</button>
              ) : (
                <button className={s.btn}>Ver Certificado</button>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
