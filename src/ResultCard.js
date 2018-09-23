import React, { Component } from "react";
import styled from "styled-components";
import lug from "./media/luggage.svg";
import bag from "./media/baggage.svg";
import nobag from "./media/nobag.svg";
import pin from "./media/pin.svg";
import plane from "./media/plane-taking-off.svg";
import share from "./media/share.svg";
import arrow from "./media/darrow.svg";

import rossiya from "./media/rossiya.png";

const Wrapper = styled.div`
  position: relative;
  font-family: Roboto;
  font-style: normal;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 755px;
  min-height: 269px;
  margin: 0 0 20px 0;
  border-radius: 4px;
  background: #ffffff;

  @media (max-width: 767px) {
    display: none;
  }
`;

const BuyWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 24px 0 24px;
  border-radius: 4px 0 0 4px;
  border-right: 1px solid #dddddd;
`;

const Bags = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  padding: 10px 0 0 0;
`;

const Luggage = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  margin: 0 4px 0 0;
  & span {
    display: inline-block;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 8px;
    left: 3.48px;
    font-weight: bold;
    line-height: normal;
    font-size: 10px;
    text-align: center;
    letter-spacing: -0.4px;

    color: #9ab0b9;
  }
`;

const Baggage = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  & span {
    display: inline-block;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 7px;
    left: 2.1px;
    font-weight: bold;
    line-height: normal;
    font-size: 10px;
    text-align: center;
    letter-spacing: -0.4px;

    color: #9ab0b9;
  }
`;

const BuyButton = styled.button`
  border: none;
  background: #ff6d00;
  border-radius: 4px;
  margin: 20px 0 0 0;
  padding: 6px 43px 6px 43px;
  min-width: 162px;
  font-weight: 500;
  line-height: 18px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  & span {
    font-weight: normal;
    line-height: 18px;
    font-size: 16px;
  }
`;

const Source = styled.div`
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
  margin: 8px 0 0 0;
`;

const TicketWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  border-radius: 0 4px 4px 0;
  padding: 16px 20px 24px 16px;
`;

const CompanyWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Charter = styled.span`
  display: block;
  text-align: center;
  border: 1px solid #2196f3;
  border-radius: 15px;
  height: 18px;
  padding: 4px 11px 4px 11px;
  margin-left: auto;
  font-weight: normal;
  line-height: 18px;
  font-size: 10px;
  text-transform: uppercase;
  color: #23a9f6;
`;

const Share = styled.button`
  border: none;
  background: none;
`;

const FlightWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  &:not(:first-child) {
    border-top: 1px solid #dddddd;
    margin: 12px 0 0 0;
    padding: 12px 0 0 0;
  }
`;

const Departure = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

const Destination = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  & div {
    text-align: right;
    margin-left: auto;
  }

  & p {
    text-align: right;
  }
`;

const Time = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-weight: normal;
  line-height: 40px;
  font-size: 28px;
  color: #323333;

  & img {
    margin-right: 8px;
  }
`;

const Date = styled.p`
  margin: 0;
  min-width: 104px;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
  & h1 {
    margin: 0;
    font-weight: 500;
    line-height: 18px;
    font-size: 12px;
  }
`;

const FlightTimeWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-self: flex-end;
  margin: 0 0 0 8px;
`;

const FlightTime = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

const Landing = styled.img`
  transform: rotate(45deg);
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 7px 0 15px 0;
`;

const Circle = styled.div`
  width: 11px;
  height: 11px;
  background: #ffffff;
  border: 1px solid #a0b0b9;
  box-sizing: border-box;
  border-radius: 50px;
`;

const Line = styled.div`
  box-sizing: content-box;
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
  height: 1px;
  background-color: #a0b0b9;
  flex-grow: 9000;
  margin: 0 2px 0 2px;
`;

const IataWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Iata = styled.span`
  font-weight: 500;
  line-height: 18px;
  font-size: 10px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

const ShowDetails = styled.button`
  display: flex;
  border: none;
  width: 20px;
  border-radius: 0 4px 4px 0;
  justify-content: center;
  align-items: center;
  background: #edf5f7;
`;

class ResultCard extends Component {
  render() {
    return (
      <Wrapper>
        <BuyWrapper>
          <Bags>
            <Luggage>
              <img src={lug} alt="hand luggage" />
              <span>{this.props.handLuggage}</span>
            </Luggage>
            {this.props.baggage > 0 ? (
              <Baggage>
                <img src={bag} alt="baggage" />
                <span>{this.props.baggage}</span>
              </Baggage>
            ) : (
              <Baggage>
                <img src={nobag} alt="no baggage" />
              </Baggage>
            )}
          </Bags>
          <BuyButton>
            Купить
            <br />
            <span>за {this.props.price} ₽</span>
          </BuyButton>
          <Source>на {this.props.source}</Source>
        </BuyWrapper>
        <TicketWrapper>
          <CompanyWrapper>
            <img src={rossiya} alt="rossiya" />
            {this.props.isCharter && <Charter>Чартер</Charter>}
            <Share>
              <img src={share} alt="share" />
            </Share>
          </CompanyWrapper>
          <div>
            <FlightWrapper>
              <Departure>
                <Time>
                  <img src={pin} alt="pin" />
                  {this.props.depTime}
                </Time>
                <Date>
                  <h1>{this.props.departure}</h1>
                  24 фев 2018, сб
                </Date>
              </Departure>
              <FlightTimeWrapper>
                <FlightTime>
                  <img src={plane} alt="" />
                  Всего: {this.props.time}
                  <Landing src={plane} alt="" />
                </FlightTime>
                <LineWrapper>
                  <Circle />
                  <Line />
                  <Circle />
                </LineWrapper>
                <IataWrapper>
                  <Iata>vko</Iata>
                  <Iata>bcn</Iata>
                </IataWrapper>
              </FlightTimeWrapper>
              <Destination>
                <Time>{this.props.desTime}</Time>
                <Date>
                  <h1>{this.props.destination}</h1>
                  24 фев 2018, сб
                </Date>
              </Destination>
            </FlightWrapper>
            {this.props.isBack && (
              <FlightWrapper>
                <Departure>
                  <Time>
                    <img src={pin} alt="pin" />
                    {this.props.backDepTime}
                  </Time>
                  <Date>
                    <h1>{this.props.destination}</h1>
                    24 фев 2018, сб
                  </Date>
                </Departure>
                <FlightTimeWrapper>
                  <FlightTime>
                    <img src={plane} alt="" />
                    Всего: 5ч
                    <Landing src={plane} alt="" />
                  </FlightTime>
                  <LineWrapper>
                    <Circle />
                    <Line />
                    <Circle />
                  </LineWrapper>
                  <IataWrapper>
                    <Iata>vko</Iata>
                    <Iata>bcn</Iata>
                  </IataWrapper>
                </FlightTimeWrapper>
                <Destination>
                  <Time>{this.props.backDesTime}</Time>
                  <Date>
                    <h1>{this.props.departure}</h1>
                    24 фев 2018, сб
                  </Date>
                </Destination>
              </FlightWrapper>
            )}
          </div>
        </TicketWrapper>
        <ShowDetails>
          <img src={arrow} alt="" />
        </ShowDetails>
      </Wrapper>
    );
  }
}

export default ResultCard;
