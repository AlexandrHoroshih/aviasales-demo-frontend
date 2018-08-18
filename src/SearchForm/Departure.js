import React, { Component } from "react";
import styled from "styled-components";
import reverse from "./arrow.svg";
import Downshift from "downshift";

const items = [
  { country: "Таиланд", city: "Бангкок", iata: "BKK" },
  { country: "Испания", city: "Барселона", iata: "BCN" },
  { country: "Грузия", city: "Батуми", iata: "BKK" },
  { country: "Венгрия", city: "Будапешт", iata: "BKK" },
  { country: "Бангладеш", city: "Дакка", iata: "BKK" },
  { country: "Россия", city: "Барнаул", iata: "BKK" }
];

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-basis: 50%;
  margin-right: 2px;
  @media (max-width: 576px) {
    margin-right: 0px;
  }

  & div {
    width: 100%;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-top-left-radius: 4px;
  padding-top: 18px;
  padding-left: 16px;
  padding-bottom: 18px;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;
  &:: placeholder {
    color: #a0b0b9;
  }

  @media (max-width: 576px) {
    border-top-right-radius: 4px;
  }

  @media (min-width: 1200px) {
    border-bottom-left-radius: 4px;
  }
`;

const IATA = styled.span`
  position: absolute;
  top: 18px;
  right: 43px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #a0b0b9;
`;

const ReverseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 19px;
  right: 16px;
`;

const List = styled.ul`
  position: absolute;
  width: 100%;
  z-index: 10;
  top: 59px;
  left: 0;
  margin-top: -5px;
  padding: 0;
  background: #fff;
`;

const ListItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  padding: 16px;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: #4a4a4a;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  &:nth-child(even) {
    background: #f4f4f4;
  }
  & i {
    font-style: normal;
    color: #a0b0b9;
  }
  & span {
    margin-left: auto;
    font-size: 12px;
    text-align: right;
    color: #a0b0b9;
  }
`;

class Departure extends Component {
  render() {
    return (
      <Wrapper>
        <Downshift itemToString={item => (item ? item.city : "")}>
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem
          }) => (
            <div>
              <label {...getLabelProps()} />
              <Input
                {...getInputProps()}
                type="text"
                placeholder="Город вылета"
              />
              <IATA>mow</IATA>
              <ReverseButton>
                <img
                  src={reverse}
                  alt="reverse departure and destination points"
                />
              </ReverseButton>
              <List {...getMenuProps()}>
                {isOpen
                  ? items
                      .filter(
                        item => !inputValue || item.city.includes(inputValue)
                      )
                      .map((item, index) => (
                        <ListItem
                          {...getItemProps({
                            key: item.city,
                            index,
                            item,
                            style: {
                              backgroundColor:
                                highlightedIndex === index ? "lightgray" : null,
                              fontWeight:
                                selectedItem === item ? "bold" : "normal"
                            }
                          })}
                        >
                          {item.city}, <i>{item.country}</i>
                          <span>{item.iata}</span>
                        </ListItem>
                      ))
                  : null}
              </List>
            </div>
          )}
        </Downshift>
      </Wrapper>
    );
  }
}

export default Departure;
