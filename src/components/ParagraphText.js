import React from "react";
import styled from "styled-components";

const ParagraphStyle = styled.div`
max-width:500px;
margin 0 auto;
font-size:1.8rem;
line-height:1.3em;
@media only screen and (max-width:768px){
	font-size:1.4rem;
}
`;

function ParagraphText({ children }) {
  //console.log(props.children);
  return (
    <ParagraphStyle className="para">
      <p>{children}</p>
    </ParagraphStyle>
  );
}

export default ParagraphText;
