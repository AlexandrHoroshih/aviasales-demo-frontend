import React, { Component } from "react";
import styled from "styled-components";
import logo from "./Header/logo.png";
import { Link } from "react-router-dom";
import Departure from "./SearchForm/Departure";
import Destination from "./SearchForm/Destination";
import Dates from "./SearchForm/Dates";
import PassengerDetails from "./SearchForm/PassengerDetails";
import back from "./media/back.svg";

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

const LogoWrapper = styled.div`
  display: flex;
  padding-top: 12px;
  flex-direction: flex-start;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    padding: 10px 0 10px 0;
  }
`;

const Logo = styled.img`
  height: 29px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Back = styled(Link)`
  display: none;
  @media (max-width: 576px) {
    display: inline;
  }
`;

const Details = styled.div`
  display: none;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 26px;
  }

  & h1 {
    margin: 0;
    font-weight: 500;
    line-height: 20px;
    font-size: 16px;
    color: #ffffff;
  }

  & h2 {
    margin: 0;
    font-weight: 500;
    line-height: 16px;
    font-size: 12px;

    color: #ffffff;

    & span {
      width: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: clip;
    }
  }
`;

const Cash = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  padding: 8px 20px 8px 20px;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;

  @media (max-width: 576px) {
    padding: 6px 12px 5px 12px;
  }
`;

const SearchForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 32px;
  padding-bottom: 32px;
  width: 100%;
  @media (min-width: 1200px) {
    flex-direction: row;
    height: 56px;
  }
  @media (max-width: 576px) {
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
    flex-basis: 40%;
  }
`;

const DetailsInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2px;
  @media (min-width: 1200px) {
    flex-basis: 60%;
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
  state = {
    departure: "Москва",
    destination: "Барселона",
    from: "24 фев, сб",
    back: "3 мар, сб"
  };

  render() {
    return (
      <Background>
        <div className="container">
          <LogoWrapper>
            <Link to="/">
              <Logo src={logo} />
            </Link>
            <Back to="/">
              <img src={back} alt="на главную" />
            </Back>
            <Details>
              <h1>
                {this.state.departure} — {this.state.destination}
              </h1>
              <h2>
                <span>{this.state.from}</span> — <span>{this.state.back}</span>,
                1 пассажир
              </h2>
            </Details>
            <div>
              <Cash>Rub</Cash>
            </div>
          </LogoWrapper>
          <SearchForm>
            <FlightInputs>
              <Departure value={this.state.departure} />
              <Destination value={this.state.destination} />
            </FlightInputs>
            <DetailsInputs>
              <Dates
                page="search"
                from={this.state.from}
                back={this.state.back}
              />
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
