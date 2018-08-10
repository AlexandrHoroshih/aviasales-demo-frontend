import React from "react";
import styled from "styled-components";
import logo from "./logo.png";
import SearchForm from "../SearchForm";

const Background = styled.header`
  background: linear-gradient(
    119.26deg,
    #00b0de -25.78%,
    #01aedc -22.1%,
    #02abdb -18.38%,
    #02abdb -14.68%,
    #02abdb -14.46%,
    #196ebd 73.68%
  );
`;

const Logo = styled.img`
  margin-top: 12px;
`;

const Title = styled.h1`
  margin-top: 81px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 48px;
  font-size: 40px;
  text-align: center;

  color: #ffffff;

  @media (max-width: 576px) {
    font-size: 20px;
    margin-top: 47px;
  }

  @media (min-width: 1200px) {
    margin-top: 213px;
  }
`;

const Tagline = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 24px;
  text-align: center;

  color: #ffffff;

  @media (max-width: 576px) {
    display: none;
  }
`;

export default function() {
  return (
    <Background>
      <div className="container">
        <Logo src={logo} />
        <Title>Поиск дешевых авиабилетов</Title>
        <Tagline>Лучший способ купить авиабилеты дешёво</Tagline>
        <div className="row center-xs">
          <div className="col-xs-12 col-md-10">
            <SearchForm />
          </div>
        </div>
      </div>
    </Background>
  );
}
