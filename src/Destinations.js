import React from "react";
import styled from "styled-components";
import logo from "./media/Group.svg";
import edit from "./media/edit.svg";
import Category, { category } from "./CategoryButtons";
import Card from "./Card";
import { cards } from "./CardsArray";

const Background = styled.div`
  position: relative;
  background: #f8fcff;
`;
const Logo = styled.img`
  margin-top: 56px;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  text-align: center;

  color: #4a4a4a;

  margin-bottom: 56px;
`;

const CityPicker = styled.span`
  color: #00ace2;
`;

const EditButton = styled.button`
  border: none;
  background: none;
  margin-left: 2px;
`;

const EditIcon = styled.img``;

const Categories = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;

const Destinations = styled.div`
  margin-top: 55px;
`;

export default function() {
  return (
    <Background>
      <div className="row center-xs">
        <div className="col-xs-12 col-md-10 col-lg-6">
          <Logo src={logo} />
          <Title>
            Популярные направления перелетов<br />
            из города{" "}
            <CityPicker>
              Москва<EditButton>
                <EditIcon src={edit} />
              </EditButton>
            </CityPicker>
          </Title>
          <Categories>
            {category.map((cat, index) => (
              <Category
                key={cat.index}
                active={cat.active}
                img={cat.img}
                title={cat.title}
              />
            ))}
          </Categories>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12 col-md-10">
          <Destinations>
            <div className="row center-xs">
              {cards.map((card, index) => (
                <div className="col-lg-6">
                  <Card
                    key={card.index}
                    country={card.country}
                    img={card.img}
                    city={card.city}
                    price={card.price}
                    date={card.date}
                  />
                </div>
              ))}
            </div>
          </Destinations>
        </div>
      </div>
    </Background>
  );
}
