import React from "react";
import styled from "styled-components";
import logo from "./media/logo.png";
import reverse from "./media/arrow.svg";
import calendar from "./media/calendar.svg";

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
  height: 500px;
`;

const Logo = styled.img`
  margin-top: 12px;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 48px;
  font-size: 40px;
  text-align: center;

  color: #ffffff;
`;

const Tagline = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
`;

const SearchForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlightInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Departure = styled.div`
  position: relative;
  display: flex;
  flex-basis: 50%;
  margin-right: 2px;
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
`;

const DestinationInput = DepartureInput.extend`
  border-top-right-radius: 4px;
  border-top-left-radius: 0px;
`;

const DetailsInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2px;
`;

const DateTo = styled.div`
  display: flex;
  position: relative;
  flex-basis: 25%;
  margin-right: 2px;
`;

const DateToInput = DepartureInput.extend`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 4px;
`;

const DateBack = styled.div`
  display: flex;
  position: relative;
  flex-basis: 25%;
`;

const DateBackInput = DepartureInput.extend`
  border-top-left-radius: 0px;
  margin-right: 2px;
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
`;

const FakeInput = DepartureInput.extend`
  border-top-left-radius: 0px;
  border-bottom-right-radius: 4px;
`;

export default function() {
  return (
    <Background>
      <div className="container">
        <Logo src={logo} />
        <Title>Поиск дешевых авиабилетов</Title>
        <Tagline>Лучший способ купить авиабилеты дешёво</Tagline>
        <div className="row center-xs">
          <div className="col-xs-10">
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
                  <DestinationInput placeholder="Город прибытия" />
                </Destination>
              </FlightInputs>
              <DetailsInputs>
                <DateTo>
                  <DateToInput placeholder="Туда" />
                  <CalendarButton>
                    <CalendarIcon src={calendar} alt="calendar date picker" />{" "}
                  </CalendarButton>
                </DateTo>
                <DateBack>
                  <DateBackInput placeholder="Обратно" />
                  <CalendarButton>
                    <CalendarIcon src={calendar} alt="calendar date picker" />{" "}
                  </CalendarButton>
                </DateBack>
                <PassengerInfo>
                  <FakeInput placeholder="1 пассажир" />
                </PassengerInfo>
              </DetailsInputs>
            </SearchForm>
          </div>
        </div>
      </div>
    </Background>
  );
}
