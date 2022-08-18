import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import s from "./Contact.module.css";
import Swal from "sweetalert2";
export default function Contact({ idioma }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_acchop8",
        "template_u0zfg9o",
        form.current,
        "riXEBxyus4W-AYHAU"
      )
      .then(
        (result) => {
          if (idioma) {
            Swal.fire(
              "Good job!",
              "You Send de Menssage succesfully !",
              "success"
            );
          } else {
            Swal.fire(
              "Buen Trabajo!",
              "Enviaste el Mensaje Satisfactoriamente!",
              "success"
            );
          }
        },
        (error) => {
          Swal.fire("Error!", `${error}`, "error");
        }
      );
    form.reset();
  };
  return (
    <div className={s.divPrincipal}>
      <div className={s.contact}>
        {idioma ? <h1>Contact me:</h1> : <h1>Contactame:</h1>}
      </div>
      <div className={s.divForm}>
        {idioma ? (
          <h3>Send Me a Menssage to contact to me</h3>
        ) : (
          <h3>Enviame un Mensaje para contactarme</h3>
        )}
        <form ref={form} onSubmit={sendEmail}>
          <div className={s.divforminterno}>
            {idioma ? <label>Name:</label> : <label>Nombre:</label>}
            <input
              type="text"
              name="user_name"
              placeholder={idioma ? "Your Name..." : "Tu Nombre"}
            />
          </div>
          <div className={s.divforminterno}>
            {idioma ? <label>Email:</label> : <label>Email:</label>}
            <input
              type="email"
              name="user_email"
              placeholder={idioma ? "Your Mail..." : "Tu Mail"}
            />
          </div>
          <div className={s.divforminterno}>
            {idioma ? <label>Message:</label> : <label>Mensaje:</label>}
            <textarea
              name="message"
              placeholder={idioma ? "Your Message..." : "Tu Mensaje"}
            />
          </div>
          <div className={s.divButton}>
            <button className={s.btn} type="submit" value="Send">
              {idioma ? "Send" : "Enviar"}
            </button>
          </div>
        </form>
      </div>

      <div className={s.contacto}>
        <a href="https://www.linkedin.com/in/valentinorusso/" target="blank">
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="Valentino Russo"
            height="70"
            width="70"
          />
        </a>
        <a href="mailto:valentinorusso2002@gmail.com" target="blank">
          <img
            align="center"
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
            alt="Valentino Russo"
            height="70"
            width="70"
          />
        </a>
        <a href="https://github.com/tinorusso1012" target="blank">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
            alt="Valentino Russo"
            height="70"
            width="70"
          />
        </a>
      </div>
    </div>
  );
}
