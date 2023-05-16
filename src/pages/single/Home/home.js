import React from "react";
import css from "./home.module.scss";
import { Section } from "../../../components/containers/section";
import { HomePageBox } from "../../../components/containers/boxes/homePageSingleBox";
import MainBikeImage from "../../../assets/home/bike.png";
import ReportBikeImage from "../../../assets/home/green-bike.png";
import { AccentButton } from "../../../components/buttons/accentButton";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <HomePageBox>
          <div className={css.hero}>
            <img
              src={MainBikeImage}
              alt={"Grey bike"}
              className={css.hero_image}
            ></img>
            <h1>
              Добро пожаловать! <br />
              в «BICYCLE RENTAL»
            </h1>
          </div>
        </HomePageBox>
      </Section>
      <Section>
        <HomePageBox color="inherit" className={css.about}>
          <h2 className={css.h2}>О нас</h2>
          <p className={css.about_text}>
            Мы известная компания, занимающаяся прокатом велосипедов в крупных
            городах России. Мы хотим вести учет случаев кражи наших велосипедов, поэтому просим вас сообщить об этом, если узнаете. 
          </p>
        </HomePageBox>
      </Section>
      <Section>
        <HomePageBox>
          <div className={`${css.hero} ${css.report}`}>
            <div className={css.report_header}>
              <span className={css.report_header_text}>
                Потеряли велосипед? <br />
                Мы поможем его найти
              </span>
              <AccentButton
                className={css.report_button}
                onClick={() => navigate("/report")}
              >
                Сообщить
              </AccentButton>
            </div>
          </div>
        </HomePageBox>
      </Section>
    </>
  );
};
