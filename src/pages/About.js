import React from "react";
import ParagraphText from "../components/ParagraphText";
import Button from "../components/Button";
import AboutImage from "../assets/images/about_kiran_detail.jpg";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about_info_items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about_info_heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top_section {
      flex-direction: column;
      gap: 5rem;
    }
    .about_subheading {
      font-size: 1.8rem;
    }
    .about_heading {
      font-size: 2.8rem;
    }
    .about_info_heading {
      font-size: 3rem;
    }
  }
`;

function About() {
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about_subheading">
              Hi, I'm <span>Kiran Karki</span>
            </p>
            <h2 className="about_heading">Web Developer</h2>
            <div className="about_info">
              <ParagraphText>
                I am from kiel, Germany. Since my childhood, i love art and
                design. I always try to design stuff with my unique point of
                view. I also love to create things that can be usefull to
                others.
                <br /> <br />
                I started coding since I was in high school. Coding is also an
                art for me. I love it and now I have the opportunity to design
                along with the coding. I find it really interesting and I
                enjoyed the process a lot.
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </ParagraphText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about_info_items">
          <div className="about_info_item">
            <h1 className="about_info_heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={["Udaya Higher Seconadary,Gulmi"]}
            />
            <AboutInfoItem
              title="College"
              items={["Janamaitri Multiple Campus, Kathmandu"]}
            />
            <AboutInfoItem
              title="Bachelor"
              items={["Nagarjuna College of IT, Lalitpur"]}
            />
          </div>

          <div className="about_info_item">
            <h1 className="about_info_heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={["HTML", "CSS", "JavaScript", "React"]}
            />
            <AboutInfoItem
              title="BackEnd"
              items={["Node", "Express", ".Net"]}
            />
            <AboutInfoItem title="Design" items={["After Effects", "Figma"]} />
          </div>

          <div className="about_info_item">
            <h1 className="about_info_heading">Experiences</h1>
            <AboutInfoItem
              title="2016 - 2017"
              items={["MSSQL/MYSQL Developer"]}
            />
            <AboutInfoItem
              title="2014 - 2016"
              items={[".Net Software Engineer"]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyle>
  );
}

export default About;
