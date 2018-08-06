import React from "react";
import styled from "styled-components";
import flagRu from "./media/flag-ru.svg";

const FlagImg = styled.img`
  display: flex;
  align-self: flex-start;
  margin-right: 16px;
`;

function Flag(props) {
  let flag;

  switch (props.country) {
    case "Россия":
      flag = <FlagImg src={flagRu} alt="" />;
      break;
    default:
      flag = true;
  }

  return <span>{flag}</span>;
}

export default Flag;
