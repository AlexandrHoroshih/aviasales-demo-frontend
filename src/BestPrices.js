import React, { Component } from "react";
import styled from "styled-components";
import best from "./media/best.svg";
import Flag from "./Flag";

const prices = [
  {
    country: "Россия",
    city: "Симферополь(Крым)",
    depart: [
      { from: "Москвы", price: 4813 },
      { from: "Санкт-Петербурга", price: 7857 },
      { from: "Новосибирска", price: 15127 },
      { from: "Екатеринбурга", price: 9275 },
      { from: "Челябинска", price: 9148 }
    ]
  },
  {
    country: "Россия",
    city: "Симферополь(Крым)",
    depart: [
      { from: "Москвы", price: 4813 },
      { from: "Санкт-Петербурга", price: 7857 },
      { from: "Новосибирска", price: 15127 },
      { from: "Екатеринбурга", price: 9275 },
      { from: "Челябинска", price: 9148 }
    ]
  },
  {
    country: "Россия",
    city: "Симферополь(Крым)",
    depart: [
      { from: "Москвы", price: 4813 },
      { from: "Санкт-Петербурга", price: 7857 },
      { from: "Новосибирска", price: 15127 },
      { from: "Екатеринбурга", price: 9275 },
      { from: "Челябинска", price: 9148 }
    ]
  }
];

const Background = styled.div`
  background: #f8fcff;
`;

const Logo = styled.img`
  margin-top: 32px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin-bottom: 60px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  text-align: center;

  color: #4a4a4a;
`;

const Destination = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const City = styled.h1`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;

  color: #5b5b5c;
  @media (max-width: 767px) {
    line-height: 20px;
    font-size: 16px;
  }
`;

const Country = styled.h2`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-transform: uppercase;
  text-align: left;
  color: #a0b0b9;
`;

const DepartureList = styled.ul`
  @media (max-width: 768px) {
    flex-basis: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
  list-style-type: none;
  padding: 0;
`;

const DepartureItem = styled.li`
  display: flex;
  justify-content: space-between;
  & + li {
    margin-top: 20px;
  }
  & span {
    display: inline-block;
    color: #00bae8;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  flex-basis: 100%;
`;

const Prices = styled.div`
  flex-basis: 25%;
  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 24px;
  }
`;

const Subtitle = styled.div`
  margin-top: 80px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  margin-bottom: 80px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;

  & span {
    margin-top: 16px;
    line-height: 20px;
    font-size: 14px;

    color: #a0b0b9;
  }
`;

class Departures extends Component {
  render() {
    return (
      <DepartureList>
        {this.props.departure.map(item => (
          <DepartureItem>
            <a>Из {item.from}</a> <span>от {item.price}</span>
          </DepartureItem>
        ))}
      </DepartureList>
    );
  }
}

export default function() {
  return (
    <Background>
      <div className="row center-xs">
        <div className="col-xs-12 col-md-10">
          <Logo src={best} />
          <Title>Лучшие цены на авиабилеты за последний месяц</Title>
          <ListWrapper>
            {prices.map((price, index) => (
              <Prices>
                <Destination>
                  <Flag country={price.country} />
                  <div>
                    <City>{price.city}</City>
                    <Country>{price.country}</Country>
                  </div>
                </Destination>
                <Departures departure={price.depart} />
              </Prices>
            ))}
          </ListWrapper>
          <Subtitle>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
            стран мира.<br /> Поиск и сравнение цен на авиабилеты среди 100
            агентств и 728 авиакомпаний.<br />
            <span>
              Цены, найденные пользователями за последние 48 часов, не являются
              офертой.
            </span>
          </Subtitle>
        </div>
      </div>
    </Background>
  );
}
