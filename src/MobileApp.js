import React, { Component } from "react";
import styled, { css } from "styled-components";
import iphone from "./media/iphone.png";
import rating from "./media/raiting.png";
import apple from "./media/apple.svg";
import android from "./media/android.svg";
import windows from "./media/windowsphone.svg";

const Background = styled.section`
  margin-top: 20px;
  position: relative;
  background: linear-gradient(
    119.26deg,
    #00b0de -25.78%,
    #01aedc -22.1%,
    #02abdb -18.38%,
    #02abdb -14.68%,
    #02abdb -14.46%,
    #196ebd 73.68%
  );

  font-family: Roboto;
  font-style: normal;
`;

const Phone = styled.img`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  @media (max-width: 576px) {
    height: 213px;
  }

  @media (max-width: 330px) {
    height: 180px;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 576px) {
    & div {
      justify-content: flex-end;
    }
  }
`;

const Title = styled.h1`
  display: flex;
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  margin: 66px 0 20px 0;
  @media (max-width: 1024px) {
    margin-top: 46px;
  }

  @media (max-width: 576px) {
    margin-top: 24px;
    width: 100%;
    text-align: center;
  }
  color: #ffffff;
`;

const Rating = styled.span`
  display: flex;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 43px;
  color: #ffffff;

  & img {
    margin-right: 12px;
  }

  @media (max-width: 576px) {
    justify-content: center;
    width: 100%;
  }
`;
const Apps = styled.div`
  display: flex;
  flex-direction: flex-start;
  margin-top: 45px;
  margin-bottom: 70px;
  @media (max-width: 1024px) {
    margin-bottom: 54px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: flex-end;
    margin: 56px 0 57px 0;
    & div {
      border: none;
    }
  }
  @media (max-width: 330px) {
    margin: 40px 0 40px 0;
  }
`;

const App = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  border-right: 1px solid #ffffff;
  margin-right: 20px;
  height: 28px;
  color: #ffffff;

  @media (max-width: 576px) {
    margin: 0;
    font-size: 18px;
    margin-bottom: 8px;
  }

  & img {
    margin-right: 8px;
  }

  & a {
    text-decoration: none;
    margin-right: 21px;
    text-align: left;
    @media (max-width: 576px) {
      margin: 0;
    }
  }

  ${props =>
    props.last === true &&
    css`
      border-right: none;
    `};
`;

class MobileApp extends Component {
  render() {
    return (
      <Background>
        <div className="container">
          <Phone src={iphone} />
          <Info>
            <div className="col-md-8">
              <Title>Скачай мобильное приложение Aviasales.ru</Title>
              <Rating>
                <span>
                  <img src={rating} alt="4.5 из 5" />Более 103 000 оценок
                </span>
              </Rating>
              <Apps>
                <App>
                  <img src={apple} alt="apple" />
                  <a>iPhone или iPad</a>
                </App>
                <App>
                  <img src={android} alt="android" />
                  <a>Android</a>
                </App>
                <App last={true}>
                  <img src={windows} alt="windows phone" />
                  <a>Windows Phone</a>
                </App>
              </Apps>
            </div>
          </Info>
        </div>
      </Background>
    );
  }
}

export default MobileApp;
