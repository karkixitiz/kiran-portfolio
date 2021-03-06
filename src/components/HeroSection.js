import React from "react";
import HeroImg from "../assets/images/kiran_profile.jpg";
import Button from "./Button";
import ParagraphText from "./ParagraphText";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import styled from "styled-components";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero_heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero_name {
      font-size: 7rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
    }
  }
  .hero_image {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero_info {
    margin-top: -18rem;
  }
  .hero_social,
  .hero_scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero_social {
    left: 50px;
  }
  .hero_scrollDown {
    right: 50px;
  }
  .hero_social_indicator,
  .hero_scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero_social_text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero_heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
    }
    .hero_name {
      font-size: 4.5rem;
    }
    .hero_img {
      height: 300px;
    }
    .hero_info {
      margin-top: 3rem;
    }
    .hero_social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .hero_social_indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero_social_text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero_scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero_heading">
            <span>Hello, it's me</span>
            <span className="hero_name">Kiran Karki</span>
          </h1>
          <div className="hero_image">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero_info">
            <ParagraphText>
              I'm currently Studying Master's in Information Engineering. I love
              to design and develop new web experiences application for the
              people.
            </ParagraphText>
            <Button btnText="see my work" btnLink="/projects" />
          </div>
          <div className="hero_social">
            <div className="hero_social_indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero_social_text">
              <ul>
                <li>
                  <a
                    href="https://github.com/karkixitiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GIT
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kiran-karki-7a2273a8/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LK
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero_scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default HeroSection;
