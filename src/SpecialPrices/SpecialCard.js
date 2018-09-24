import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 240px;
    min-height: 270px;
    flex-basis: 100%;
    margin-bottom: 12px;
  }

  @media (max-width: 576px) {
    max-width: 300px;
  }
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  padding: 22px 16px 22px 12px;
  background: #cd2027;

  & span {
    display: inline-block;
    width: 223px;
    line-height: 20px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #ffffff;
  }

  & img {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 18px 12px 16px 12px;
  background: #ffffff;

  & p {
    display: flex;
    flex-basis: 100%;
    font-weight: normal;
    line-height: 16px;
    font-size: 12px;
    color: #242424;
    margin: 12px 0 28px 0;
  }
`;

const Logo = styled.img`
  display: inline-block;
  height: 30px;
  width: 120px;
  margin-top: 4px;
`;

const Price = styled.div`
  line-height: 16px;
  font-size: 20px;
  text-align: right;

  color: #5c5c5c;

  & small {
    line-height: 16px;
    font-size: 12px;

    color: #5c5c5c;
  }
`;

const Days = styled.div`
  margin-top: 10px;
  line-height: 15px;
  font-size: 12px;
  text-align: right;

  color: #d93633;
`;

const ShowMoreButton = styled.button`
  width: 100%;
  height: 45px;
  background: #ffffff;
  border: 2px solid #cd1f27;
  border-radius: 3px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #d93533;
  padding: 10px;
`;

class SpecialCard extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          {this.props.destination ? (
            <span>
              В {this.props.destination} от {this.props.price} рублей
            </span>
          ) : (
            <span>Билеты от {this.props.price} рублей</span>
          )}
          {this.props.alliance && (
            <img
              src={
                process.env.PUBLIC_URL +
                "/media/companies/" +
                this.props.alliance +
                ".png"
              }
              alt="alliance"
            />
          )}
        </Header>
        <Info>
          <Logo
            src={
              process.env.PUBLIC_URL +
              "/media/companies/" +
              this.props.logo +
              ".png"
            }
            alt={this.props.company}
          />
          <Price>
            <small>от </small>
            {this.props.price} ₽<Days>Осталось {this.props.daysleft} дней</Days>
          </Price>
          {this.props.destination ? (
            <p>
              В {this.props.destination} от {this.props.price} рублей!
              Специальное предложение от авиакомпании {this.props.company}!
            </p>
          ) : (
            <p>
              Билеты от {this.props.price} рублей! Специальное предложение от
              компании {this.props.company}!
            </p>
          )}
          <ShowMoreButton>Узнать подробности</ShowMoreButton>
        </Info>
      </Wrapper>
    );
  }
}

export default SpecialCard;
