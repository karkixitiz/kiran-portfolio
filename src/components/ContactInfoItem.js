import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";
import ParagraphText from "./ParagraphText";

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;

function ContactInfoItem({
  icon = <MdPlace></MdPlace>,
  text = "This is an info",
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <ParagraphText>{text}</ParagraphText>
      </div>
    </ItemStyles>
  );
}

export default ContactInfoItem;
