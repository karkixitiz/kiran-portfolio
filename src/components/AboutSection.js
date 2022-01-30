import React from "react";
import Button from "./Button";
import ParagraphText from "./ParagraphText";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/images/about-sec-img.png";
import styled from "styled-components";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection_left,
  .aboutSection_right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection_buttons {
    display: flex;
    align-item: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection_left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
          <ParagraphText>
            I'm student and looking start up job. I love art and always try to
            show unique views to the audience through my design.
          </ParagraphText>
          <div className="aboutSection_buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection_right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}

export default AboutSection;
