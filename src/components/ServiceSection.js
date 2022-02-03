import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from "react-icons/md";

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services_allItems {
    display: flex;
    gap: 10rem;
    justify-content: margin-between;
    margin-top: 5rem;
  }
  @media only srceen and(max-width:768px) {
    .services_allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I will do for you" />
        <div className="services_allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            description="Designing engaging and responsive landing pages. Optimising sites for maximum speed and scalability. Integrating client CMS programs and data feeds into websites."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            description="I also do a web development. I create high performance website with blazing fast spped."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Development"
            description="I develop mobile application. I create mobile app with eye catching UI"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}

export default ServiceSection;
