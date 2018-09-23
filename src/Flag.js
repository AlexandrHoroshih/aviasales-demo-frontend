import React from "react";
import styled from "styled-components";

const FlagImg = styled.img`
  display: flex;
  align-self: flex-start;
  margin-right: 16px;
`;

function Flag(props) {
  return (
    <FlagImg
      src={
        process.env.PUBLIC_URL + "/media/flags/" + props.countryCode + ".svg"
      }
      alt={props.countryCode}
    />
  );
}

export default Flag;
