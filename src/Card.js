import React, { Component } from "react";
import styled from "styled-components";
import Flag from "./Flag";
import format from "date-fns/format";
import { ru } from "date-fns/esm/locale";

const Base = styled.div`
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  background: #ffffff;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    margin: 0 6px 15px 6px;
  }
`;

const CityImg = styled.img`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  width: 100%;
`;

const Info = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 12px 24px 12px 24px;
`;

const City = styled.h1`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;

  color: #5b5b5c;
  @media (max-width: 767px) {
    line-height: 20px;
    font-size: 16px;
  }
`;

const Country = styled.h2`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-transform: uppercase;
  text-align: left;
  color: #a0b0b9;
`;

const Price = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 32px;
  font-size: 22px;
  text-align: right;

  color: #00bae8;
  @media (max-width: 767px) {
    line-height: normal;
    font-size: 14px;
  }
`;

const Date = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: right;
  margin: 0;
  color: #a0b0b9;
`;

const Destination = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const FlagWrapper = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;
window.__localeId__ = "ru";
class Card extends Component {
  render() {
    return (
      <Base>
        <CityImg
          src={
            process.env.PUBLIC_URL + "/media/cities/" + this.props.iata + ".png"
          }
        />
        <Info>
          <Destination>
            <FlagWrapper>
              <Flag countryCode={this.props.countryCode} />
            </FlagWrapper>
            <div>
              <City>{this.props.city}</City>
              <Country>{this.props.country}</Country>
            </div>
          </Destination>
          <div>
            <Price>Найти от {this.props.price} ₽</Price>
            <Date>{format(this.props.date, "d MMMM", { locale: ru })}</Date>
          </div>
        </Info>
      </Base>
    );
  }
}
export default Card;
