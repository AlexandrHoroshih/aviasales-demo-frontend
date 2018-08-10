import React from "react";
import styled from "styled-components";
import flagRu from "./media/flag-ru.svg";
import flagEs from "./media/flag-es.svg";
import flagArm from "./media/flag-am.svg";
import flagMol from "./media/flag-md.svg";

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
    case "Испания":
      flag = <FlagImg src={flagEs} alt="" />;
      break;
    case "Армения":
      flag = <FlagImg src={flagArm} alt="" />;
      break;
    case "Молдавия":
      flag = <FlagImg src={flagMol} alt="" />;
      break;
    default:
      flag = true;
  }

  return <span>{flag}</span>;
}

export default Flag;
