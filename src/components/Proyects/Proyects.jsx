import React from "react";
import s from "./Proyects.module.css";
import Cards from "../Card/Cards";
import PI from "../../Imagenes/PI-FOOD.png";
import PF from "../../Imagenes/RGB-STORE.png";
export default function Proyects() {
  return (
    <>
      <div className={s.divProyects}>
        <h1 className={s.text}>My Proyects:</h1>
      </div>
      <div className={s.divPrincipal}>
        <Cards
          title={"FOOD-APP"}
          img={PI}
          link={"https://pi-food-tino-russo.vercel.app/"}
          tech={[
            "react",
            "Redux",
            "JavaScript",
            "CSS",
            "PostgressSQL",
            "Express",
            "Nodejs",
          ]}
          text1={"Single Proyect of SoyHenry's bootcamp. "}
          text2={"is an application where you can see and create recipes."}
        />
        <Cards
          title={"RGB-STORE"}
          img={PF}
          link={"https://pg-rgb-store-three.vercel.app/"}
          tech={[
            "react",
            "Redux",
            "JavaScript",
            "Tailwind",
            "PostgressSQL",
            "Express",
            "Nodejs",
            "Passport",
            "PostgreSQL",
            "Nodemailer",
            "GitFlow",
          ]}
          text1={"Group Proyect of SoyHenry's bootcamp "}
          text2={"It is an e-commerce for the sale of computer products."}
        />
      </div>
    </>
  );
}
