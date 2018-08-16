import React, { Component } from "react";
import styled from "styled-components";
import Card from "./ResultCard";
import Filters from "./Filters";
import { results } from "./ResultsArray";

const Background = styled.section`
  background: #eaeaea;
`;

const Wrapper = styled.div`
  padding-top: 56px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const FlitersWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 25%;
  margin-right: 16px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 58.333%;
  @media (max-width: 1024px) {
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
  background: #00acde;
  width: 100%;
  padding: 18px;
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
`;

class Results extends Component {
  state = {
    departure: "Москва",
    destination: "Барселона"
  };

  render() {
    return (
      <Background>
        <div className="container">
          <Wrapper>
            <FlitersWrapper>
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
