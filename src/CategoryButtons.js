import React, { Component } from "react";
import styled, { css } from "styled-components";

import everywhere from "./media/everywhere.svg";
import history from "./media/history.svg";
import sun from "./media/sun.svg";
import family from "./media/family.svg";
import party from "./media/party.svg";
import shop from "./media/shopping.svg";

const category = [
  {
    title: "Куда угодно",
    img: everywhere,
    active: true
  },
  {
    title: "Солнце и море",
    img: sun,
    active: false
  },
  {
    title: "Шопинг, город",
    img: shop,
    active: false
  },
  {
    title: "Культура и история",
    img: history,
    active: false
  },
  {
    title: "Ночная жизнь",
    img: party,
    active: false
  },
  {
    title: "Отдых с детьми",
    img: family,
    active: false
  }
];

const Wrapper = styled.div`
  flex-basis: 13%;
  @media (max-width: 576px) {
    flex-basis: 27%;
    margin-bottom: 20px;
  }
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
  margin: 0;
`;

const Title = styled.p`
  margin-top: 12px;
  margin-bottom: 0px;
  max-width: 70px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: #00ace2;
  ${props =>
    props.active &&
    css`
      color: #5c5c5c;
      border-bottom: 1px solid #00ace2;
    `};
`;

class Category extends Component {
  render() {
    return (
      <Wrapper>
        <Img src={this.props.img} alt={this.props.title} />
        <Title active={this.props.active}>{this.props.title}</Title>
      </Wrapper>
    );
  }
}

export { category };

export default Category;
