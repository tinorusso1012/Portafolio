import React from "react";
import s from "./Cards.module.css";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

export default function ({ img, title, tech, text1, text2, link, link2,color }) {
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
    <>
    {color == "white" ? 
    <div className={s.cardcontainer}>
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
          <div className={s.DivIcons}>
            <FaGithub className={s.icons} href={link2} target="_blank" />
            <AiOutlineLink className={s.icons} href={link} target="_blank" />
          </div>
        </div>
      </div>
    </div>
    : <>
     <div className={s.cardcontainer}>
      <div className={s.cardsBlack}>
        <div className={s.frontBlack}>
          <div>
            <h1 className={s.titleBlack}>{title}</h1>
          </div>
          <div>
            <img src={img} className={s.image} />
          </div>
          <div className={s.divText}>
            <h3 className={s.textBlack}>{text1}</h3>
            <h3 className={s.textBlack}>{text2}</h3>
          </div>
          <div className={s.DivIconsBlack}>
            <FaGithub className={s.icons} href={link2} target="_blank" />
            <AiOutlineLink className={s.icons} href={link} target="_blank" />
          </div>
        </div>
      </div>
    </div>
    </>}
    </>
  );
}
