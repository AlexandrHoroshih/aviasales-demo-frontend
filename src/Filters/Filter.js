import React, { Component } from "react";
import styled, { css } from "styled-components";
import Checkbox from "../Checkbox";
import arrow from "./filter-arrow.svg";
import flight from "../media/flight.svg";
import Slider from "./Slider";

const FilterWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 16px;
  border-bottom: 1px solid #dddddd;
`;

const ShowContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;
  color: #5b5b5c;
`;

const FilterArrow = styled.img`
  ${props =>
    props.open === true &&
    css`
      transform: rotate(90deg);
    `};
  margin-right: 6px;
`;

const Count = styled.span`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;
  color: #a0b0b9;
  margin-left: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 20px 0 0 0;
  font-family: Roboto;
  font-style: normal;
  & p {
    font-weight: normal;
    line-height: 16px;
    font-size: 12px;

    color: #4a4a4a;
  }
`;

const Item = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const MinPrice = styled.span`
  display: inline;
  font-weight: normal;
  line-height: 36px;
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
`;

const Ways = styled.h1`
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  & img {
    margin: 0 5px 0 5px;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const SliderTitle = styled.div`
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  margin: 15px 0 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

const FakeSliderValues = styled.div`
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  margin: 0 0 4px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const GroupTitle = styled.h1`
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  margin: 16px 0 8px 0;
  color: #323333;
`;

function FilterType(props) {
  let filter;

  switch (props.filterType) {
    case "Пересадки":
      filter = (
        <Content>
          <Item>
            <Checkbox label="Всё" />
          </Item>
          {props.content.map((con, index) => (
            <Item key={index}>
              <Checkbox label={con.name} />
              <MinPrice>{con.minPrice} ₽</MinPrice>
            </Item>
          ))}
        </Content>
      );
      break;

    case "Время вылета и прибытия":
      filter = (
        <Content>
          <Ways>
            {props.departure}
            <img src={flight} alt="to" />
            {props.destination}
          </Ways>
          <SliderWrapper>
            <SliderTitle>Вылет из {props.departure}:</SliderTitle>
            <FakeSliderValues>
              <span>с 00:00</span>
              <span>до 23:59</span>
            </FakeSliderValues>
            <Slider />
          </SliderWrapper>
          <SliderWrapper>
            <SliderTitle>Прибытие в {props.destination}:</SliderTitle>
            <FakeSliderValues>
              <span>с 00:00</span>
              <span>до 23:59</span>
            </FakeSliderValues>
            <Slider />
          </SliderWrapper>
        </Content>
      );
      break;
    case "Багаж":
      filter = <Content>content</Content>;
      break;
    case "Длительность пересадки":
      filter = <Content>content</Content>;
      break;
    case "Время в пути":
      filter = (
        <Content>
          <Ways>
            {props.departure}
            <img src={flight} alt="to" />
            {props.destination}
          </Ways>
          <SliderWrapper>
            <FakeSliderValues>
              <span>от 3ч 05м</span>
              <span>до 18ч 30м</span>
            </FakeSliderValues>
            <Slider />
          </SliderWrapper>
        </Content>
      );
      break;
    case "Авиакомпании":
      filter = (
        <Content>
          <Checkbox label="Несколько авиакомпаний" />
          <p>
            Показывать билеты с перелетами, выполняемыми несколькими
            авиакомпаниями, включая выбранную
          </p>
          {props.content.map((con, index) => (
            <div>
              <GroupTitle>{con.groupTitle}</GroupTitle>
              <Item>
                <Checkbox label="Всё" />
              </Item>
              {con.group.map((item, index) => (
                <Item>
                  <Checkbox label={item.name} />
                  <MinPrice>{item.minPrice} ₽</MinPrice>
                </Item>
              ))}
            </div>
          ))}
        </Content>
      );
      break;
    case "Аэропорты":
      filter = <Content>content</Content>;
      break;
    case "Аэропорт пересадки":
      filter = <Content>content</Content>;
      break;
    case "Агенства":
      filter = <Checkbox>content</Checkbox>;
      break;
    default:
      filter = true;
  }
  return <div>{filter}</div>;
}

class Filter extends Component {
  state = {
    isOpen: this.props.initialState
  };

  toggleOpen = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    return (
      <FilterWrapper>
        <ShowContent onClick={this.toggleOpen}>
          <FilterArrow open={this.state.isOpen} src={arrow} alt="open/close" />
          {this.props.title} <Count>{this.props.count}</Count>
        </ShowContent>
        {this.state.isOpen && (
          <FilterType
            filterType={this.props.title}
            content={this.props.content}
            departure={this.props.departure}
            destination={this.props.destination}
          />
        )}
      </FilterWrapper>
    );
  }
}

export default Filter;
