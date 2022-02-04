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
  desc = "Designing engaging and responsive landing pages.",
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem_icon">{icon}</div>
      <div className="servicesItem_title">{title}</div>
      <ParagraphText>{desc}</ParagraphText>
    </ItemStyles>
  );
}

export default ServicesSectionItem;
