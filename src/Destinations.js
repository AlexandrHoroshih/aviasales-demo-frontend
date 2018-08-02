import React from "react";
import styled from "styled-components";
import logo from "./media/Group.svg";
import edit from "./media/edit.svg";
import everywhere from "./media/everywhere.svg";
import history from "./media/history.svg";
import sun from "./media/sun.svg";
import family from "./media/family.svg";
import party from "./media/party.svg";
import shop from "./media/shopping.svg";
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
`;

const Category = styled.div`
  height: 103px;
  width: 90px;
`;

const CategoryTitle = styled.a`
  margin-top: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: #00ace2;
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
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-6">
              <Categories>
                <Category>
                  <img src={everywhere} alt="куда угодно" />
                  <CategoryTitle>
                    {" "}
                    Куда<br />угодно
                  </CategoryTitle>{" "}
                </Category>
                <Category>
                  <img src={sun} alt="куда угодно" />
                  <CategoryTitle>
                    Солнце<br />и море
                  </CategoryTitle>{" "}
                </Category>
                <Category>
                  <img src={history} alt="куда угодно" />
                  <CategoryTitle>
                    История<br />и культура
                  </CategoryTitle>{" "}
                </Category>
              </Categories>
            </div>
            <div className="col-xs-12 col-sm-6">
              <Categories>
                <Category>
                  <img src={party} alt="куда угодно" />
                  <CategoryTitle>
                    Ночная<br />Жизнь
                  </CategoryTitle>{" "}
                </Category>
                <Category>
                  <img src={shop} alt="куда угодно" />
                  <CategoryTitle>
                    Шоппинг,<br />город
                  </CategoryTitle>{" "}
                </Category>
                <Category>
                  <img src={family} alt="куда угодно" />
                  <CategoryTitle>
                    Отдых<br />с детьми
                  </CategoryTitle>{" "}
                </Category>{" "}
              </Categories>
            </div>
          </div>
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
