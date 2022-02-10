import React from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection_wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection_wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection_wrapper {
      flex-direction: column;
    }
    .contactSection_wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in touch" />
        <div className="contactSection_wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+491739503968" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="karkikiran714@gmail.com"
            />
            <ContactInfoItem text="Helmholtzstraße 28, kiel" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}

export default ContactSection;
