import React from "react";
import s from "./Skills.module.css";
import lineaVerde from "../../Imagenes/descargaLineaVerde.png";
export default function Skills({ idioma }) {
  return (
    <>
      <div className={s.DivPrincipal}>
        <div>
          {idioma ? (
            <h1 className={s.divTitle}>My Skills:</h1>
          ) : (
            <h1 className={s.divTitle}>Mis Skills:</h1>
          )}
        </div>
        <div className={s.skills}>
          {/* front Technologies */}
          <div className={s.front}>
            <h2 className={s.Tituloss}>FRONT-END:</h2>
            <a href="https://devdocs.io/css/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                width="60"
                height="60"
              />
            </a>
            <a href="https://redux.js.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
                width="60"
                height="60"
              />{" "}
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="60"
                height="60"
              />{" "}
            </a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="60"
                height="60"
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
                width="60"
                height="60"
              />{" "}
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="60"
                height="60"
              />{" "}
            </a>
            <a href="https://www.npmjs.com/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                width="60"
                height="60"
              />
            </a>
          </div>
          {/* back Technologies */}
          <div className={s.back}>
            <h2 className={s.Tituloss}>BACK-END:</h2>
            <a
              href="https://www.postgresql.org"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
                width="60"
                height="60"
              />{" "}
            </a>
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                width="60"
                height="60"
              />
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
                width="60"
                height="60"
              />{" "}
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="60"
                height="60"
              />{" "}
            </a>
            <a href="https://www.npmjs.com/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                width="60"
                height="60"
              />
            </a>
            <a href="https://sequelize.org/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
                width="60"
                height="60"
              />
            </a>
          </div>
          {/* Other Technologies */}
          <div className={s.other}>
            <div>
              <h2 className={s.Tituloss}>OTHER:</h2>
            </div>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="60"
                height="60"
              />{" "}
            </a>
            <a href="https://postman.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
                width="60"
                height="60"
              />{" "}
            </a>
            <a href="https://devdocs.io/cpp/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                width="60"
                height="60"
              />
            </a>
            <a href="https://slack.com/intl/es-ar/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
                width="60"
                height="60"
              />
            </a>
            <a href="https://trello.com/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
                width="60"
                height="60"
              />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                width="60"
                height="60"
              />
            </a>
          </div>
        </div>
      </div>

      {/* RESPONSIVE */}

      <div className={s.DivPrincipalResponsive}>
        <div>
          <h1 className={s.divTitleResponsive}>My Skills:</h1>
        </div>
        <div className={s.skillsResponsive}>
          {/* front Technologies */}
          <div className={s.frontResponsive}>
            <h2>Front-End</h2>
            <a href="https://devdocs.io/css/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                width="40"
                height="40"
              />
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
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
              />{" "}
            </a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
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
            <a href="https://www.npmjs.com/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                width="40"
                height="40"
              />
            </a>
          </div>
          {/* back Technologies */}
          <div className={s.backResponsive}>
            <h2>Back-End</h2>
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
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                width="40"
                height="40"
              />
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
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />{" "}
            </a>
            <a href="https://www.npmjs.com/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                width="40"
                height="40"
              />
            </a>
            <a href="https://sequelize.org/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
                width="40"
                height="40"
              />
            </a>
          </div>
          {/* Other Technologies */}
          <div className={s.otherResponsive}>
            {idioma ? <h2>Other</h2> : <h2>Otras</h2>}
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
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
            <a href="https://devdocs.io/cpp/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                width="40"
                height="40"
              />
            </a>
            <a href="https://slack.com/intl/es-ar/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
                width="40"
                height="40"
              />
            </a>
            <a href="https://trello.com/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
