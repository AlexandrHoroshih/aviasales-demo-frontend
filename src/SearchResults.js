import React, { Component } from "react";
import styled, { css } from "styled-components";
import Card from "./ResultCard";
import MobileCard from "./ResultCardMobile";
import Filters from "./Filters";
import { results } from "./ResultsArray";
import filters from "./Filters/filters.svg";

const Background = styled.section`
  background: #eaeaea;
  position: relative;
`;

const Wrapper = styled.div`
  padding-top: 56px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    padding: 16px 0 0 0;
  }
  @media (max-width: 767px) {
    margin: 0 -8px 0 -8px;
  }
`;

const FlitersWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 25%;
  margin-right: 16px;
  @media (max-width: 1024px) {
    display: none;
    ${props =>
      props.open === true &&
      css`
        display: flex;
        max-width: 299px;
        position: absolute;
        z-index: 1;
        top: 16px;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
      `};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 58.333%;
  @media (max-width: 1024px) {
    flex-basis: 100%;
    align-items: center;
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;

const MoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  max-width: 755px;
  background: #00acde;
  width: 100%;
  padding: 18px;
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 767px) {
    display: none;
  }
`;

const FilterButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 16px 0 0 0;
  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const FilterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #23a9f6;
  border: none;
  border-radius: 10px;
  padding: 17px 24px 17px 24px;
`;

class Results extends Component {
  state = {
    departure: "Москва",
    destination: "Барселона",
    filterIsOpen: false
  };

  filterModal = () => {
    if (this.state.filterIsOpen) {
      this.setState({ filterIsOpen: false });
    } else {
      this.setState({ filterIsOpen: true });
    }
  };

  render() {
    return (
      <Background>
        <FilterButtonWrapper>
          <FilterButton onClick={this.filterModal}>
            <img src={filters} alt="" />
          </FilterButton>
        </FilterButtonWrapper>
        <div className="container">
          <Wrapper>
            <FlitersWrapper open={this.state.filterIsOpen}>
              <Filters
                departure={this.state.departure}
                destination={this.state.destination}
              />
            </FlitersWrapper>
            <ContentWrapper>
              {results.map((res, index) => (
                <Card
                  key={index}
                  handLuggage={res.handLuggage}
                  baggage={res.baggage}
                  price={res.price}
                  source={res.source}
                  isCharter={res.isCharter}
                  departure={this.state.departure}
                  time={res.time}
                  depTime={res.depTime}
                  destination={this.state.destination}
                  desTime={res.desTime}
                  isBack={res.isBack}
                  backDepTime={res.backDepTime}
                  backDesTime={res.backDesTime}
                />
              ))}
              {results.map((res, index) => (
                <MobileCard
                  key={index}
                  status={res.status}
                  handLuggage={res.handLuggage}
                  baggage={res.baggage}
                  price={res.price}
                  source={res.source}
                  isCharter={res.isCharter}
                  time={res.time}
                  departure={this.state.departure}
                  depTime={res.depTime}
                  destination={this.state.destination}
                  desTime={res.desTime}
                  isBack={res.isBack}
                  backDepTime={res.backDepTime}
                  backDesTime={res.backDesTime}
                />
              ))}
              <MoreButton>Показать ещё 10 билетов</MoreButton>
            </ContentWrapper>
          </Wrapper>
        </div>
      </Background>
    );
  }
}

export default Results;
