import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import ParagraphText from "./ParagraphText";

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem_icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem_title {
    font-size: 2.5rem;
    font-family: "Montserrat SemiBold";
  }
  .para {
    margin-top: 2rem;
  }
`;

function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = "Web design",
  description = "Designing engaging and responsive landing pages. Optimising sites for maximum speed and scalability. Integrating client CMS programs and data feeds into websites.",
}) {
  return (
    <ItemStyles>
      <div className="servicesItem_icon">
        {icon}
        <div className="servicesItem_title">{title}</div>
        <ParagraphText>{description}</ParagraphText>
      </div>
    </ItemStyles>
  );
}

export default ServicesSectionItem;
