import React, { Component } from "react";
import styled, { css } from "styled-components";
import clock from "./media/clock.svg";
import flight from "./media/to.svg";
import rossiya from "./media/rossiya.png";

const Wrapper = styled.div`
  position: relative;
  font-family: Roboto;
  font-style: normal;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  background: #ffffff;
  margin: 0 0 8px 0;
  padding: 0 0 14px 0;
  @media (min-width: 767px) {
    display: none;
  }
`;

const Status = styled.div`
  display: none;
  ${props =>
    props.status === "cheapest" &&
    css`
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      &:after {
        content: "Самый дешёвый 🤑";
      }
      padding: 7px;
      background: #83d40b;
      font-weight: 900;
      line-height: 18px;
      font-size: 14px;
      color: #ffffff;
    `};

  ${props =>
    props.status === "fastest" &&
    css`
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      &:after {
        content: "Самый быстрый ⚡️";
      }
      padding: 7px;
      background: #af7542;
      font-weight: 900;
      line-height: 18px;
      font-size: 14px;
      color: #ffffff;
    `};

  ${props =>
    props.status === "best" &&
    css`
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      &:after {
        content: "Самый лучший 😍";
      }
      padding: 7px;
      background: #c279d1;
      font-weight: 900;
      line-height: 18px;
      font-size: 14px;
      color: #ffffff;
    `};
`;

const Head = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 16px 6px 10px 6px;
`;

const Price = styled.div`
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;
`;

const FlightInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;
  padding: 0 13px 0 6px;
  ${props =>
    props.isBack === true &&
    css`
      padding-top: 10px;
    `};
`;

const FlightTime = styled.span`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  & img {
    margin: 0 8px 0 0;
  }

  & span {
    margin: 0 16px 0 0;
  }
`;

const Plane = styled.img`
  ${props =>
    props.isBack === true &&
    css`
      transform: rotate(-180deg);
    `};
`;

const FlightType = styled.span`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

class ResultCardMobile extends Component {
  render() {
    return (
      <Wrapper>
        <Status status={this.props.status} />
        <Head>
          <Price>{this.props.price} ₽</Price>
          <img
            src={
              process.env.PUBLIC_URL +
              "/media/companies/" +
              this.props.companyFirst +
              ".png"
            }
          />
        </Head>
        <FlightInfo>
          <FlightTime>
            <Plane src={flight} alt="" />
            <span>
              {this.props.depTime} - {this.props.desTime}
            </span>
            <img src={clock} alt="" />
            {this.props.time}
          </FlightTime>
          <FlightType>Прямой</FlightType>
        </FlightInfo>
        {this.props.isBack && (
          <FlightInfo isBack={this.props.isBack}>
            <FlightTime>
              <Plane isBack={this.props.isBack} src={flight} alt="" />
              <span>
                {this.props.backDepTime} - {this.props.backDesTime}
              </span>
              <img src={clock} alt="" />
              {this.props.time}
            </FlightTime>
            <FlightType>Прямой</FlightType>
          </FlightInfo>
        )}
      </Wrapper>
    );
  }
}

export default ResultCardMobile;
