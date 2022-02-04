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
  description = "Designing engaging and responsive landing pages.",
}) {
  return (
    <ItemStyles>
      <div className="servicesItem_icon">{icon}</div>
      <div className="servicesItem_title">{title}</div>
      <ParagraphText>{description}</ParagraphText>
    </ItemStyles>
  );
}

export default ServicesSectionItem;
