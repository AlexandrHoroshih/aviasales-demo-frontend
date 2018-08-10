import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import reverse from "./arrow.svg";
import calendar from "./calendar.svg";
import aero from "./aero.svg";
import arrow from "../media/darrow.svg";
import minus from "./minus.svg";
import plus from "./plus.svg";

const SearchForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 122px;
  @media (max-width: 576px) {
    margin-top: 0px;
    margin-bottom: 88px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 254px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const FlightInputs = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 576px) {
    flex-direction: column;
  }
  width: 100%;
  @media (min-width: 1200px) {
    flex-basis: 45%;
  }
`;

const Departure = styled.div`
  position: relative;
  display: flex;
  flex-basis: 50%;
  margin-right: 2px;
  @media (max-width: 576px) {
    margin-right: 0px;
  }
`;

const DepartureInput = styled.input`
  width: 100%;
  border: none;
  border-top-left-radius: 4px;
  padding-top: 18px;
  padding-left: 16px;
  padding-bottom: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
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

const ReverseButtonIcon = styled.img``;

const Destination = styled.div`
  display: flex;
  flex-basis: 50%;
  @media (min-width: 1200px) {
    margin-right: 2px;
  }
`;

const DestinationInput = DepartureInput.extend`
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

const DetailsInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2px;
  @media (max-width: 576px) {
    flex-wrap: wrap;
    margin-top: 2px;
  }

  @media (min-width: 1200px) {
    flex-basis: 55%;
    margin-top: 0px;
  }
`;

const Dates = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 60%;
  @media (max-width: 1024px) {
    flex-basis: 50%;
  }
  flex-wrap: nowrap;
  margin-right: 2px;
  @media (max-width: 576px) {
    flex-basis: 100%;
    margin-right: 0px;
  }
`;

const DateTo = styled.div`
  display: flex;
  position: relative;
  flex-basis: 50%;
  margin-right: 2px;
  @media (max-width: 576px) {
    margin-right: 0px;
    padding-right: 2px;
  }
`;

const DateToInput = DepartureInput.extend`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 4px;
  @media (max-width: 576px) {
    border-bottom-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  @media (min-width: 1200px) {
    border-bottom-left-radius: 0px;
  }
`;

const DateBack = styled.div`
  display: flex;
  position: relative;
  flex-basis: 50%;
`;

const DateBackInput = DepartureInput.extend`
  border-top-left-radius: 0px;
  @media (max-width: 576px) {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0;
  }
  @media (min-width: 1200px) {
    border-bottom-left-radius: 0;
  }
`;

const CalendarButton = styled.button`
  position: absolute;
  top: 18px;
  right: 16px;
  border: none;
  background: none;
`;

const CalendarIcon = styled.img``;

const PassengerWrapper = styled.div`
  display: flex;
  position: relative;
  flex-basis: 40%;

  @media (max-width: 1024px) {
    flex-basis: 50%;
  }

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

const Passenger = styled.div`
  background: #ffffff;
  width: 100%;
  padding-top: 18px;
  padding-left: 16px;
  padding-bottom: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: left;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  @media (max-width: 576px) {
    border-bottom-left-radius: 4px;
    margin-top: 2px;
    border-top-right-radius: 0px;
  }

  @media (min-width: 1200px) {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
  }
  color: #4a4a4a;
  & span {
    color: #a0b0b9;
  }

  ${props =>
    props.open === true &&
    css`
      border: 2px solid #ff9241;
    `};
`;

const DropdownButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 28%;
  right: 16px;
`;

const SearchButton = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 32px;
  border: none;
  background: #ff9241;
  border-radius: 4px;
  padding: 15px 0 16px 45px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 28px;
  max-width: 308px;
  color: #ffffff;

  @media (min-width: 1200px) {
    margin-top: 48px;
  }

  @media (max-width: 576px) {
    margin-top: 16px;
    width: 100%;
    max-width: 576px;
  }

  @media (max-width: 323px) {
    padding: 10px 0 11px 40px;
  }
`;

const SearchLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

const Plane = styled.img`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 7px;
`;

const Info = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  padding: 16px;
  padding-bottom: 8px;
  top: 58px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const DropdownArrow = styled.img`
  ${props =>
    props.open === true &&
    css`
      transform: rotate(-180deg);
    `};
`;

const Amount = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 32px;
  margin-bottom: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;

  color: #4a4a4a;

  text-align: left;

  & span {
    margin-right: auto;

    & span {
      font-size: 12px;

      color: #a0b0b9;
    }
  }
`;

const Minus = styled.button`
  display: flex;
  border: 1px solid #dbdbdb;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  background: none;
  padding: 15px 7px 15px 7px;
`;

const Plus = styled.button`
  display: flex;
  border: 1px solid #dbdbdb;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background: none;
  padding: 11px 7px 11px 7px;
`;

const Num = styled.div`
  display: flex;
  border: 1px solid #dbdbdb;
  border-right: none;
  border-left: none;
  padding: 7px;
  font-weight: 500;

  color: #4a4a4a;
`;

const FlightClass = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #dbdbdb;
  margin-top: 8px;
  padding-top: 4px;

  & span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 36px;
    font-size: 12px;

    color: #4a4a4a;
  }
`;

const Checkbox = styled.button`
  width: 18px;
  height: 18px;
  border: 1px solid #00ace2;
  border-radius: 4px;
  background: #ffffff;
  margin-right: 6px;
`;

class Dropdown extends Component {
  state = {
    isOpen: false,
    adult: 1,
    teen: 0,
    baby: 0
  };

  toggleOpen = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  minusAd = () => {
    if (this.state.adult > 0) {
      let param = this.state.adult;
      param -= 1;
      this.setState({ adult: param });
    }
  };

  plusAd = () => {
    let param = this.state.adult;
    param += 1;
    this.setState({ adult: param });
  };

  minusTeen = () => {
    let param = this.state.teen;
    param -= 1;
    this.setState({ teen: param });
  };

  plusTeen = () => {
    let param = this.state.teen;
    param += 1;
    this.setState({ teen: param });
  };

  minusBaby = () => {
    let param = this.state.baby;
    param -= 1;
    this.setState({ baby: param });
  };

  plusBaby = () => {
    let param = this.state.baby;
    param += 1;
    this.setState({ baby: param });
  };

  render() {
    return (
      <PassengerWrapper>
        <Passenger onClick={this.toggleOpen}>
          {this.state.adult + this.state.baby + this.state.teen} пассажир,{" "}
          <span>эконом</span>
        </Passenger>
        <DropdownButton onClick={this.toggleOpen}>
          <DropdownArrow
            open={this.state.isOpen}
            src={arrow}
            alt="passenger info"
          />
        </DropdownButton>
        {this.state.isOpen && (
          <Info>
            <Amount>
              <span>Взрослые</span>
              <Minus onClick={this.minusAd}>
                <img src={minus} alt="minus" />
              </Minus>
              <Num>{this.state.adult}</Num>
              <Plus onClick={this.plusAd}>
                <img src={plus} alt="plus" />
              </Plus>
            </Amount>
            <Amount>
              <span>Дети до 12 лет</span>
              <Minus onClick={this.minusTeen}>
                <img src={minus} alt="minus" />
              </Minus>
              <Num>{this.state.teen}</Num>
              <Plus onClick={this.plusTeen}>
                <img src={plus} alt="plus" />
              </Plus>
            </Amount>
            <Amount>
              <span>
                Дети до 2 лет<br />
                <span>Без места</span>
              </span>
              <Minus onClick={this.minusBaby}>
                <img src={minus} alt="minus" />
              </Minus>
              <Num>{this.state.baby}</Num>
              <Plus onClick={this.plusBaby}>
                <img src={plus} alt="plus" />
              </Plus>
            </Amount>
            <FlightClass>
              <Checkbox />
              <span>Бизнес-класс</span>
            </FlightClass>
          </Info>
        )}
      </PassengerWrapper>
    );
  }
}

export default function() {
  return (
    <SearchForm>
      <FlightInputs>
        <Departure>
          <DepartureInput placeholder="Город вылета" type="text" />
          <IATA>mow</IATA>
          <ReverseButton>
            <ReverseButtonIcon
              src={reverse}
              alt="reverse departure and destination points"
            />
          </ReverseButton>
        </Departure>
        <Destination>
          <DestinationInput placeholder="Город прибытия" type="text" />
        </Destination>
      </FlightInputs>
      <DetailsInputs>
        <Dates>
          <DateTo>
            <DateToInput placeholder="Туда" type="text" />
            <CalendarButton>
              <CalendarIcon src={calendar} alt="calendar date picker" />
            </CalendarButton>
          </DateTo>
          <DateBack>
            <DateBackInput placeholder="Обратно" type="text" />
            <CalendarButton>
              <CalendarIcon src={calendar} alt="calendar date picker" />
            </CalendarButton>
          </DateBack>
        </Dates>
        <Dropdown />
      </DetailsInputs>
      <SearchButton>
        <SearchLink to="/Search">
          Найти билеты<Plane src={aero} alt="Search" />
        </SearchLink>
      </SearchButton>
    </SearchForm>
  );
}
