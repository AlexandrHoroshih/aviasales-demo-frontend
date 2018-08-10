import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-basis: 50%;
  @media (min-width: 1200px) {
    margin-right: 2px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding-top: 18px;
  padding-left: 16px;
  padding-bottom: 18px;
  line-height: 20px;
  font-size: 16px;
  border-top-right-radius: 4px;
  border-top-left-radius: 0px;
  @media (max-width: 576px) {
    border-top-right-radius: 0px;
    margin-top: 2px;
  }

  @media (min-width: 1200px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

class Destination extends Component {
  render() {
    return (
      <Wrapper>
        <Input placeholder="Город прибытия" type="text" />
      </Wrapper>
    );
  }
}

export default Destination;
