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
    props.open &&
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
  &:not(:first-of-type) {
    margin: 20px 0 0 0;
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

function FilterContent(props) {
  if (props.filterType === "checkboxes") {
    return (
      <Content>
        {props.specialCheck &&
          props.specialCheck.map((item, index) => (
            <div>
              <Checkbox label={item.title} />
              <p>{item.description}</p>
            </div>
          ))}
        {props.content.map((con, index) => (
          <div>
            {con.groupTitle && <GroupTitle>{con.groupTitle}</GroupTitle>}
            {con.group.length && (
              <Item>
                <Checkbox label="Всё" />
              </Item>
            )}
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
  }
  if (props.filterType === "sliders") {
    return (
      <Content>
        <Ways>
          {props.departure}
          <img src={flight} alt="to" />
          {props.destination}
        </Ways>
        {props.content.map((con, index) => (
          <SliderWrapper key={index}>
            <SliderTitle>
              {con.name}{" "}
              {con.name &&
                (con.usedForDeparture ? props.departure : props.destination)}
              {con.name && ":"}
            </SliderTitle>
            {con.handles === "daytime" && (
              <FakeSliderValues>
                <span>с 00:00</span>
                <span>до 23:59</span>
              </FakeSliderValues>
            )}
            {con.handles === "time" && (
              <FakeSliderValues>
                <span>от 4ч 20м</span>
                <span>до 48ч 00м</span>
              </FakeSliderValues>
            )}
            <Slider />
          </SliderWrapper>
        ))}
        {props.isBack && (
          <Ways>
            {props.destination}
            <img src={flight} alt="to" />
            {props.departure}
          </Ways>
        )}
        {props.isBack &&
          props.content.map((con, index) => (
            <SliderWrapper key={index}>
              <SliderTitle>
                {con.name}{" "}
                {con.name &&
                  (con.usedForDeparture ? props.destination : props.departure)}
                {con.name && ":"}
              </SliderTitle>
              {con.handles === "daytime" && (
                <FakeSliderValues>
                  <span>с 00:00</span>
                  <span>до 23:59</span>
                </FakeSliderValues>
              )}
              {con.handles === "time" && (
                <FakeSliderValues>
                  <span>от 4ч 20м</span>
                  <span>до 48ч 00м</span>
                </FakeSliderValues>
              )}
              <Slider />
            </SliderWrapper>
          ))}
      </Content>
    );
  }
  return <div>no content</div>;
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
          <FilterContent
            filterType={this.props.type}
            content={this.props.content}
            isBack={this.props.isBack}
            specialCheck={this.props.specialCheck}
            departure={this.props.departure}
            destination={this.props.destination}
          />
        )}
      </FilterWrapper>
    );
  }
}

export default Filter;
