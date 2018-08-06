import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import reverse from "./arrow.svg";
import calendar from "./calendar.svg";
import aero from "./aero.svg";

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
const Inputs = styled.div`
  display: flex;
  @media (min-width: 1200px) {
    flex-direction: row;
  }

  @media (max-width: 1199px) {
    flex-direction: column;
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
    margin-top: 1px;
  }

  @media (min-width: 1200px) {
    flex-basis: 55%;
    margin-top: 0px;
  }
`;

const Dates = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 50%;
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

const PassengerInfo = styled.div`
  display: flex;
  flex-basis: 50%;

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

const FakeInput = DepartureInput.extend`
  border-top-left-radius: 0px;
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
`;

const SearchButton = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 32px;
  border: none;
  background: #ff9241;
  border-radius: 4px;

  padding-top: 15px;
  padding-left: 45px;
  padding-bottom: 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 28px;

  color: #ffffff;

  @media (min-width: 1200px) {
    margin-top: 48px;
  }

  @media (max-width: 576px) {
    margin-top: 16px;
    width: 100%;
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

export default function() {
  return (
    <Background>
      <div className="container">
        <Logo src={logo} />
        <Title>Поиск дешевых авиабилетов</Title>
        <Tagline>Лучший способ купить авиабилеты дешёво</Tagline>
        <div className="row center-xs">
          <div className="col-xs-12 col-md-10">
            <SearchForm>
              <Inputs>
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
                    <DestinationInput
                      placeholder="Город прибытия"
                      type="text"
                    />
                  </Destination>
                </FlightInputs>
                <DetailsInputs>
                  <Dates>
                    <DateTo>
                      <DateToInput placeholder="Туда" type="text" />
                      <CalendarButton>
                        <CalendarIcon
                          src={calendar}
                          alt="calendar date picker"
                        />
                      </CalendarButton>
                    </DateTo>
                    <DateBack>
                      <DateBackInput placeholder="Обратно" type="text" />
                      <CalendarButton>
                        <CalendarIcon
                          src={calendar}
                          alt="calendar date picker"
                        />
                      </CalendarButton>
                    </DateBack>
                  </Dates>
                  <PassengerInfo>
                    <FakeInput placeholder="1 пассажир" type="text" />
                  </PassengerInfo>
                </DetailsInputs>
              </Inputs>
              <SearchButton>
                <SearchLink to="/Search">
                  Найти билеты<Plane src={aero} alt="Search" />
                </SearchLink>
              </SearchButton>
            </SearchForm>
          </div>
        </div>
      </div>
    </Background>
  );
}
