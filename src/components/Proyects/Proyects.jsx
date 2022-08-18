import React from "react";
import s from "./Proyects.module.css";
import Cards from "../Card/Cards";
import PI from "../../Imagenes/PI-FOOD.png";
import PF from "../../Imagenes/RGB-STORE.png";
import TinoFlix from "../../Imagenes/TinoFlix.png";
import portafolio from "../../Imagenes/Portafolio.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { EffectCoverflow, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
export default function Proyects({ idioma }) {
  return (
    <>
      {/* <div className={s.divProyects}>
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
        <Cards
          title={"Netflix-Clone"}
          img={TinoFlix}
          link={"https://netflix-clone-tinorusso1012.vercel.app/login"}
          tech={[
            "react",
            "Redux",
            "JavaScript",
            "CSS",
            "MaterialUI",
            "Nodejs",
            "Firebase",
            "RestApi",
          ]}
          text1={"Individual project to practice"}
          text2={"It is a clone of the famous  Netflix application."}
        />
      </div> */}
      {idioma ? (
        <>
          {" "}
          <div className={s.divProyects}>
            <h1>My Proyects</h1>
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"5"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination, Scrollbar, A11y]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Cards
                color={"white"}
                title={"RGB-STORE"}
                img={PF}
                link={"https://pg-rgb-store-three.vercel.app/"}
                link2={"https://github.com/Arroxhack/PG-RGB-Store"}
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
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                title={"Netflix-Clone"}
                img={TinoFlix}
                color={"black"}
                link={"https://netflix-clone-tinorusso1012.vercel.app/"}
                link2={"https://github.com/tinorusso1012/NetflixClone"}
                tech={[
                  "react",
                  "Redux",
                  "JavaScript",
                  "CSS",
                  "MaterialUI",
                  "Nodejs",
                  "Firebase",
                  "RestApi",
                ]}
                text1={"Individual project to practice"}
                text2={"It is a clone of the famous  Netflix application."}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                title={"FOOD-BOOK"}
                img={PI}
                color={"white"}
                link={"https://pi-food-tino-russo.vercel.app/"}
                link2={"https://github.com/tinorusso1012/PI-FOOD-TinoRusso"}
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
                text2={
                  "is an application where you can see and create recipes."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                title={"Portafolio"}
                img={portafolio}
                color={"black"}
                link={"https://github.com/tinorusso1012/Portafolio"}
                link2={"https://portafolio-tinorusso1012.vercel.app/"}
                tech={["react", "JavaScript", "CSS"]}
                text1={"My Web Page"}
                text2={""}
              />
            </SwiperSlide>
          </Swiper>
        </>
      ) : (
        <>
          <div className={s.divProyects}>
            <h1>Mis Proyectos</h1>
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"5"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination, Scrollbar, A11y]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Cards
                color={"white"}
                title={"RGB-STORE"}
                img={PF}
                link={"https://pg-rgb-store-three.vercel.app/"}
                link2={"https://github.com/Arroxhack/PG-RGB-Store"}
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
                text1={"Proyecto Grupal Realizado en el Bootcamp de Soy Henry"}
                text2={
                  "Es un Comercio completamente funcional de productos tecnologicos."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                title={"Clon de Netflix"}
                img={TinoFlix}
                color={"black"}
                link={"https://netflix-clone-tinorusso1012.vercel.app/"}
                link2={"https://github.com/tinorusso1012/NetflixClone"}
                tech={[
                  "react",
                  "Redux",
                  "JavaScript",
                  "CSS",
                  "MaterialUI",
                  "Nodejs",
                  "Firebase",
                  "RestApi",
                ]}
                text1={"Proyecto Personal para Practicar"}
                text2={"Es un Clon de la famosa Aplicacion / Pagina Netflix."}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                title={"Libro de Comidas"}
                img={PI}
                color={"white"}
                link={"https://pi-food-tino-russo.vercel.app/"}
                link2={"https://github.com/tinorusso1012/PI-FOOD-TinoRusso"}
                tech={[
                  "react",
                  "Redux",
                  "JavaScript",
                  "CSS",
                  "PostgressSQL",
                  "Express",
                  "Nodejs",
                ]}
                text1={"Proyecto individual del Bootcamp de SoyHenry. "}
                text2={
                  "Es una aplicacion donde poder ver y crear Recetas de Comidas."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                title={"Portafolio"}
                img={portafolio}
                color={"black"}
                link={"https://github.com/tinorusso1012/Portafolio"}
                link2={"https://portafolio-tinorusso1012.vercel.app/"}
                tech={["react", "JavaScript", "CSS"]}
                text1={" Mi Pagina Web"}
                text2={""}
              />
            </SwiperSlide>
          </Swiper>
        </>
      )}
    </>
  );
}
