import React, { Component } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import clear from "../media/clear.svg";

const filters = [
  {
    title: "Пересадки",
    type: "checkboxes",
    initialState: true,
    content: [
      {
        group: [
          { name: "Без пересадок", minPrice: 7712 },
          { name: "1 пересадка", minPrice: 11150 },
          { name: "2 пересадки", minPrice: 16821 },
          { name: "3 пересадки", minPrice: 23986 }
        ]
      }
    ]
  },
  {
    title: "Время вылета и прибытия",
    type: "sliders",
    initialState: true,
    isBack: true,
    content: [
      { name: "Вылет из", handles: "daytime", usedForDeparture: true },
      { name: "Прибытие в", handles: "daytime", usedForDeparture: false }
    ]
  },
  {
    title: "Багаж"
  },
  {
    title: "Длительность пересадки"
  },
  {
    title: "Время в пути",
    type: "sliders",
    initialState: true,
    isBack: true,
    content: [{ name: null, handles: "time", usedForDeparture: false }]
  },
  {
    title: "Авиакомпании",
    type: "checkboxes",
    count: 43,
    initialState: true,
    specialCheck: [
      {
        title: "Несколько авиакомпаний",
        description:
          "Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную"
      }
    ],
    content: [
      {
        groupTitle: "Альянсы",
        group: [
          { name: "Star Alliance", minPrice: 11150 },
          { name: "OneWorld", minPrice: 12370 },
          { name: "SkyTeam", minPrice: 16290 }
        ]
      },
      {
        groupTitle: "Авиакомпании",
        group: [
          { name: "Aegean Airlines", minPrice: 11150 },
          { name: "Air Algerie", minPrice: 12370 },
          { name: "Air Europa", minPrice: 16290 },
          { name: "Air France", minPrice: 11150 },
          { name: "Air Moldova", minPrice: 12370 },
          { name: "Alitalia", minPrice: 16290 },
          { name: "Alitalia CityLiner", minPrice: 11150 },
          { name: "Belle Air", minPrice: 12370 },
          { name: "British Airways", minPrice: 16290 },
          { name: "Brussels Airlines", minPrice: 11150 },
          { name: "Bulgaria Air", minPrice: 12370 }
        ]
      }
    ]
  },
  {
    title: "Аэропорты"
  },
  {
    title: "Аэропорт пересадки",
    count: 23
  },
  {
    title: "Агенства",
    count: 7
  }
];

const Background = styled.div`
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-flow: column nowrap;
  font-family: Roboto;
  font-style: normal;
  position: relative;
`;

const DropAllUpper = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 12px;
  right: 12px;
`;

const DropAll = styled.button`
  border: inherit;
  background: inherit;
  border-radius: 0 0 4px 4px;
  padding: 0 16px 0 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-weight: normal;
  line-height: 52px;
  font-size: 12px;
  text-transform: uppercase;
  color: #00bde4;
`;

class Filters extends Component {
  render() {
    return (
      <Background>
        <DropAllUpper>
          <img src={clear} alt="" />
        </DropAllUpper>
        {filters.map((filter, index) => (
          <Filter
            key={index}
            title={filter.title}
            count={filter.count}
            type={filter.type}
            content={filter.content}
            isBack={filter.isBack}
            specialCheck={filter.specialCheck}
            departure={this.props.departure}
            destination={this.props.destination}
            initialState={filter.initialState}
          />
        ))}
        <DropAll>
          Сбросить все фильтры <img src={clear} alt="clear all" />
        </DropAll>
      </Background>
    );
  }
}

export default Filters;
