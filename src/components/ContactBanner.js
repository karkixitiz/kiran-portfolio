import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ParagraphText from "./ParagraphText";

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner_wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner_heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and(max-width:768px) {
    .contactBanner_heading {
      font-size: 2.8rem;
    }
  }
`;

function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner_wrapper">
          <ParagraphText>Have a project in mind</ParagraphText>
          <h3 className="contactBanner_heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}

export default ContactBanner;
