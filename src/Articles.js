import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import plane from "./media/articleplane.png";
import ticket from "./media/articleticket.png";
import list from "./media/articlelist.png";

const Background = styled.div`
  background: #ffffff;
  font-family: Roboto;
  font-style: normal;
`;

const Content = styled.div`
  padding: 20px 0 20px 0;
`;

const Article = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;
  text-transform: uppercase;
  color: #4a4a4a;

  & img {
    margin-right: 7px;
  }
`;

const Text = styled.p`
  margin: 16px 0 0 0;
`;

const MoreLink = styled(Link)`
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;

  color: #00ace2;
`;

function Articles() {
  return (
    <Background>
      <div className="container">
        <Content>
          <Article>
            <Title>
              <img src={plane} alt="" />
              Как купить дешёвые авиабилеты
            </Title>
            <Text>
              Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
              самолет по сотням авиакомпаний и находим за считанные минуты самые
              дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь
              нашим поиском, который совершенно бесплатно сравнивает цены на
              авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
              смысла ходить в авиакассы, обзванивать агентства — дешевый билет
              находится на расстоянии клика. На нашем сайте вы можете подобрать
              дешевые билеты на самолет в Европу, Азию и на другие континенты.
              Мы написали для вас простую инструкцию о том, как пользоваться
              поиском и экономить на перелетах от 1000 до 20 000 руб в год.{" "}
              <MoreLink to="/Search">Подробнее</MoreLink>
            </Text>
          </Article>
          <Article>
            <Title>
              <img src={ticket} alt="" />
              Электронный авиабилет
            </Title>
            <Text>
              Электронный авиабилет — это, по сути, обычный билет на самолет, но
              только в менее привычном для путешественника виде. Вся информация
              об авиаперелете (данные пассажира, маршрут следования) хранится в
              электронной базе, а пассажир получает на руки маршрут-квитанцию.
              Некоторые пассажиры, купив авиабилет онлайн и получив
              маршрут-квитанцию, удивлены ее видом — это обыкновенный лист
              формата А4, на котором распечатана вся информация о предстоящем
              перелете. Однако это действительно официальный документ,
              подтверждающий договор между авиаперевозчиком и пассажиром. При
              регистрации на рейс пассажир должен предъявить маршрут-квитанцию
              вместе с удостоверением личности точно так же, как предъявляют
              обыкновенный бумажный билет. Следует отметить, что электронный
              билет, приобретенный онлайн, стоит дешевле своего бумажного
              аналога. <MoreLink to="/Search">Подробнее</MoreLink>
            </Text>
          </Article>
          <Article>
            <Title>
              <img src={list} alt="" />
              20 советов авиапутешественникам
            </Title>
            <Text>
              Есть масса путеводителей по странам, но ни одного о том, как
              провести время в самолете. Для того, чтобы сделать ваш перелет
              максимально комфортным, мы написали 20 советов о подготовке к
              путешествию. Ведь настоящее путешествие начинается со слов «Добро
              пожаловать на борт нашего самолета»!{" "}
              <MoreLink to="/Search">Подробнее</MoreLink>
            </Text>
          </Article>
        </Content>
      </div>
    </Background>
  );
}

export default Articles;
