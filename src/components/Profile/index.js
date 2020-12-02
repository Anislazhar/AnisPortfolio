import React, { useContext } from "react";
import "./index.scss";
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import { ThemeContext } from "../../context/ThemeContext";
import { useAnimation } from "../../use/animation";
import Picanis from "../../assets/anis.png";
import cv from '../../assets/cv.pdf';

const Profile = () => {
  const { backgroundImage, type } = useContext(ThemeContext);
  const { animation } = useAnimation();
  return (
    <div className="profile">
      <div className="profile__banner">
        <div
          className={`profile__photo ${animation}`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <img src={Picanis} alt={type} />
      </div>
      <div className="profile__content">
        <div className="profile__title">Anis Lazhar</div>
        <TypedText
          dataText={[
            "Junior Full Stack Developer",
            "Frontend Development",
            "Backend Development",
          ]}
        />
        <SocialLinks />
        <Info icon="telephone">+4917621826014</Info>
        <Info icon="location">Berlin / Germany</Info>
        <Skills />
      </div>
      <div className="profile__contact">
        <a
          href={cv}
          target="_blank"
          rel="noreferrer"
        >
          <span>Download CV</span>
        </a>
        <a href="mailto:anis.lazhar24@gmail.com">
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
};

export default Profile;
