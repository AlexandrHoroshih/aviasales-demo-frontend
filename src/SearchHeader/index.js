import React, { Component } from "react";
import styled from "styled-components";
import logo from "../Header/logo.png";
import { Link } from "react-router-dom";
import Departure from "../SearchForm/Departure";
import Destination from "../SearchForm/Destination";
import Dates from "../SearchForm/Dates";
import PassengerDetails from "../SearchForm/PassengerDetails";

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

const SearchForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 40px;
  padding-bottom: 32px;
  width: 100%;
  @media (min-width: 1200px) {
    flex-direction: row;
    height: 56px;
  }
  @media (max-width: 768px) {
    display: none;
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
    flex-basis: 38%;
  }
`;

const DetailsInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2px;
  @media (min-width: 1200px) {
    flex-basis: 62%;
    margin-top: 0px;
  }
`;

const SearchButton = styled.button`
  display: flex;
  flex-basis: auto;
  justify-content: center;
  border: none;
  background: #ff9241;
  border-radius: 4px;
  width: 194px;
  height: 56px;
  padding: 17px;
  font-weight: 900;
  line-height: normal;
  font-size: 20px;
  color: #ffffff;
  margin-left: 2px;
  @media (min-width: 1200px) {
    margin-left: 16px;
  }

  @media (max-width: 1200px) {
    flex-basis: 25%;
    border-radius: 0px;
    border-bottom-right-radius: 4px;
  }
`;

const SearchLink = styled(Link)`
  color: #ffffff;
  text-align: center;
  text-decoration: none;
`;

class SearchHeader extends Component {
  render() {
    return (
      <Background>
        <div className="container">
          <Logo src={logo} />
          <SearchForm>
            <FlightInputs>
              <Departure />
              <Destination />
            </FlightInputs>
            <DetailsInputs>
              <Dates page="search" />
              <PassengerDetails page="search" />
              <SearchButton>
                <SearchLink to="/Search">Найти билеты</SearchLink>
              </SearchButton>
            </DetailsInputs>
          </SearchForm>
        </div>
      </Background>
    );
  }
}
export default SearchHeader;
