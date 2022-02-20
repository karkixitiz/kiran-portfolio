import React from "react";
import ParagraphText from "./ParagraphText";
import FooterCol from "./FooterCol";
import styled from "styled-components";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer_col1 {
    flex: 2;
  }
  .footer-col2,
  .footer-col3,
  .footer-col4 {
    flex: 1;
  }
  .footer_col1_title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer_col1 .para {
      max-width: 100%;
    }
    .copyright {
      div {
        margin-top: 0;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer_col1">
          <h1 className="footer_col1_title"> Kiran Karki</h1>
          <ParagraphText>
            "Don't write better error messages, write code that doesn't need
            them." - Jason C. McDonald
          </ParagraphText>
        </div>

        <div className="footer_col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "About",
                path: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                path: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                path: "/contact",
              },
            ]}
          />
        </div>
        <div className="footer_col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+491794390866",
                path: "tel:+491794390866",
              },
              {
                title: "karkikiran714@gmail.com",
                path: "https://www.gmail.com",
              },
              {
                title: "Kiel, Germany",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer_col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "Facebook",
                path: "https://www.facebook.com/kiran.karki.108/",
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/kirankark/",
              },
              {
                title: "Linkedin",
                path: "https://www.linkedin.com/in/kiran-karki-7a2273a8/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <ParagraphText>©2022 - Designed by Kiran Karki </ParagraphText>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
