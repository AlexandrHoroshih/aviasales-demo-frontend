import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import aero from "./aero.svg";
import Departure from "./Departure";
import Destination from "./Destination";
import Dates from "./Dates";
import PassengerDetails from "./PassengerDetails";

const SearchForm = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;

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

export default function() {
  return (
    <SearchForm>
      <FlightInputs>
        <Departure />
        <Destination />
      </FlightInputs>
      <DetailsInputs>
        <Dates />
        <PassengerDetails />
      </DetailsInputs>
      <SearchButton>
        <SearchLink to="/Search">
          Найти билеты<Plane src={aero} alt="Search" />
        </SearchLink>
      </SearchButton>
    </SearchForm>
  );
}
