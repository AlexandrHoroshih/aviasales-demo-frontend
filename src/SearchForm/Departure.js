import React, { Component } from "react";
import styled from "styled-components";
import reverse from "./arrow.svg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-basis: 50%;
  margin-right: 2px;
  @media (max-width: 576px) {
    margin-right: 0px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-top-left-radius: 4px;
  padding-top: 18px;
  padding-left: 16px;
  padding-bottom: 18px;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;
  &:: placeholder {
    color: #a0b0b9;
  }

  @media (max-width: 576px) {
    border-top-right-radius: 4px;
  }

  @media (min-width: 1200px) {
    border-bottom-left-radius: 4px;
  }
`;

const IATA = styled.span`
  position: absolute;
  top: 18px;
  right: 43px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;

  color: #a0b0b9;
`;

const ReverseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 19px;
  right: 16px;
`;

class Departure extends Component {
  render() {
    return (
      <Wrapper>
        <Input placeholder="Город вылета" type="text" />
        <IATA>mow</IATA>
        <ReverseButton>
          <img src={reverse} alt="reverse departure and destination points" />
        </ReverseButton>
      </Wrapper>
    );
  }
}

export default Departure;
