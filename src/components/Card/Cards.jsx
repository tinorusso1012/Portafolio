import React from "react";
import s from "./Cards.module.css";

export default function ({ img, title, tech, text1, text2, link }) {
  let Tech = "";
  let index = tech.length - 1;
  tech.map((e, i) => {
    if (index != i) {
      Tech += e + " " + "-" + " ";
    } else {
      Tech += e + " ";
    }
  });

  return (
    <div className={s.cardcontainer}>
      <a className={s.link} href={link} target="_blank">
        <div className={s.cards}>
          <div className={s.front}>
            <div>
              <h1 className={s.title}>{title}</h1>
            </div>
            <div>
              <img src={img} className={s.image} />
            </div>
            <div className={s.divText}>
              <h3 className={s.text}>{text1}</h3>
              <h3 className={s.text}>{text2}</h3>
            </div>
          </div>
          <div className={s.back}>
            <h1 className={s.titleback}>TECHNOLOGIES:</h1>
            <div className={s.DivUl}>
              <span className={s.spanTech}>{Tech}</span>
            </div>
            <div className={s.imagenesTech}>
              <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  width="40"
                  height="40"
                />{" "}
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="40"
                  height="40"
                />{" "}
              </a>
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />{" "}
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />{" "}
              </a>
              <a
                href="https://www.microsoft.com/en-us/sql-server"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
                  alt="mssql"
                  width="40"
                  height="40"
                />{" "}
              </a>
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  width="40"
                  height="40"
                />{" "}
              </a>
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="40"
                  height="40"
                />{" "}
              </a>
              <a
                href="https://www.postgresql.org"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgresql"
                  width="40"
                  height="40"
                />{" "}
              </a>
              <a href="https://postman.com" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                  width="40"
                  height="40"
                />{" "}
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                />{" "}
              </a>
              <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                  width="40"
                  height="40"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
