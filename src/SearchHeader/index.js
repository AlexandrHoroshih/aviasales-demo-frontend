import React, { Component } from "react";
import styled from "styled-components";
import logo from "../Header/logo.png";

const Background = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;

  background: linear-gradient(
    163.71deg,
    #00b0de 0.36%,
    #01aedc 4.04%,
    #02abdb 7.77%,
    #02abdb 11.48%,
    #02abdb 11.7%,
    #196ebd 100%
  );
`;

const Logo = styled.img`
  margin-top: 12px;
`;

class SearchHeader extends Component {
  render() {
    return (
      <Background>
        <div className="container">
          <Logo src={logo} />
        </div>
      </Background>
    );
  }
}
export default SearchHeader;
