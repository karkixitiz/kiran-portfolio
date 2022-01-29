import React from "react";
import HeroImg from "../assets/images/kiran_profile.jpg";
import Button from "../components/Button";
import ParagraphText from "../components/ParagraphText";

function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero_heading">
          <span>Hello, This is</span>
          <span>Kiran Karki</span>
        </h1>
        <div className="hero_image">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero_info">
          <ParagraphText>
            I'm currently Studying Master in Information Engineering. I love to
            design and make new web experiences for the people.
          </ParagraphText>
          <Button btnText="see my work" btnLink="/projects" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
