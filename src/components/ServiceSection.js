import React from "react";
import { MdDesktopMac, MdCode, MdDataExploration } from "react-icons/md";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="Designing engaging and responsive landing pages. Optimizing sites for maximum speed and scalability."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web development"
            desc="I also do a web development. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdDataExploration />}
            title="SQL Developer"
            desc="Designing database tables and structures. Writing optimized SQL queries, creating triggers for
			automation, maintaining data quality etc."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
