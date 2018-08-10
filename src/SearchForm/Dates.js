import React, { Component } from "react";
import styled, { css } from "styled-components";
import calendar from "./calendar.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 60%;
  @media (max-width: 1024px) {
    flex-basis: 50%;
  }
  flex-wrap: nowrap;
  margin-right: 2px;
  @media (max-width: 576px) {
    flex-basis: 100%;
    margin-right: 0px;
  }

  ${props =>
    props.page === "search" &&
    css`
      flex-basis: 50%;
      @media (max-width: 1200px) {
        flex-basis: 50%;
      }
    `};
`;

const DateTo = styled.div`
  display: flex;
  position: relative;
  flex-basis: 50%;
  margin-right: 2px;
  @media (max-width: 576px) {
    margin-right: 0px;
    padding-right: 2px;
  }
`;

const DateToInput = styled.input`
  width: 100%;
  border: none;
  border-top-left-radius: 4px;
  padding-top: 18px;
  padding-left: 16px;
  padding-bottom: 18px;
  line-height: 20px;
  font-size: 16px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 4px;
  @media (max-width: 576px) {
    border-bottom-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  @media (min-width: 1200px) {
    border-bottom-left-radius: 0px;
  }
`;

const DateBack = styled.div`
  display: flex;
  position: relative;
  flex-basis: 50%;
`;

const DateBackInput = styled.input`
  width: 100%;
  border: none;
  border-top-left-radius: 4px;
  padding-top: 18px;
  padding-left: 16px;
  padding-bottom: 18px;
  line-height: 20px;
  font-size: 16px;
  border-top-left-radius: 0px;
  @media (max-width: 576px) {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0;
  }
  @media (min-width: 1200px) {
    border-bottom-left-radius: 0;
  }
`;

const CalendarButton = styled.button`
  position: absolute;
  top: 18px;
  right: 16px;
  border: none;
  background: none;
`;

class Dates extends Component {
  render() {
    return (
      <Wrapper page={this.props.page}>
        <DateTo>
          <DateToInput placeholder="Туда" type="text" />
          <CalendarButton>
            <img src={calendar} alt="calendar date picker" />
          </CalendarButton>
        </DateTo>
        <DateBack>
          <DateBackInput placeholder="Обратно" type="text" />
          <CalendarButton>
            <img src={calendar} alt="calendar date picker" />
          </CalendarButton>
        </DateBack>
      </Wrapper>
    );
  }
}

export default Dates;
