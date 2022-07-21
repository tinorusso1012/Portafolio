import React from "react";
import s from "./Contact.module.css";
export default function Contact() {
  return (
    <div className={s.divPrincipal}>
      <div className={s.contact}>
        <h1>Contact me:</h1>
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