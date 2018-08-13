import React, { Component } from "react";
import styled from "styled-components";
import Card from "./ResultCard";
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
  @media (max-width: 1024px;) {
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

class Results extends Component {
  render() {
    return (
      <Background>
        <div className="container">
          <Wrapper>
            <FlitersWrapper>Filters</FlitersWrapper>
            <ContentWrapper>
              {results.map((res, index) => (
                <Card
                  key={index}
                  handLuggage={res.handLuggage}
                  baggage={res.baggage}
                  price={res.price}
                  source={res.source}
                  isCharter={res.isCharter}
                  departure={res.departure}
                  depTime={res.depTime}
                  destination={res.destination}
                  desTime={res.desTime}
                  isBack={res.isBack}
                  backDepTime={res.backDepTime}
                  backDesTime={res.backDesTime}
                />
              ))}
            </ContentWrapper>
          </Wrapper>
        </div>
      </Background>
    );
  }
}

export default Results;
