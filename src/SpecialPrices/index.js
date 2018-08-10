import React from "react";
import styled from "styled-components";
import SpecialCard from "./SpecialCard";
import lufthansa from "./lufthansa.png";
import pobeda from "./pobeda.png";
import alliance from "./alliance.png";

const specials = [
  {
    destination: null,
    company: "Победа",
    logo: pobeda,
    alliance: null,
    price: 499,
    daysleft: 45
  },
  {
    destination: "Нью-Йорк",
    company: "Lufthansa",
    logo: lufthansa,
    alliance: alliance,
    price: 20460,
    daysleft: 19
  },
  {
    destination: "Лос-Анджелес",
    company: "Lufthansa",
    logo: lufthansa,
    alliance: alliance,
    price: 22360,
    daysleft: 19
  }
];

const Background = styled.section`
  background: linear-gradient(
    119.26deg,
    #00b0de -25.78%,
    #01aedc -22.1%,
    #02abdb -18.38%,
    #02abdb -14.68%,
    #02abdb -14.46%,
    #196ebd 73.68%
  );
`;

const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 42px;
  font-size: 30px;

  color: #ffffff;
  padding: 24px 0 20px 0;
`;

const SpecialsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
  padding: 25px 0 23px 0;

  & a {
    text-decoration: underline;
    @media (max-width: 576px) {
      margin-bottom: 8px;
    }
  }

  & span {
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  @media (max-width: 576px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export default function() {
  return (
    <Background>
      <div className="container">
        <Title>Спецпредложения на авиабилеты</Title>
        <Cards>
          {specials.map((special, index) => (
            <SpecialCard
              key={special.index}
              destination={special.destination}
              price={special.price}
              alliance={special.alliance}
              company={special.company}
              logo={special.logo}
              daysleft={special.daysleft}
            />
          ))}
        </Cards>
        <SpecialsFooter>
          <a>Смотреть все спецпредложения</a>
          <span>*средняя цена по направлению</span>
        </SpecialsFooter>
      </div>
    </Background>
  );
}
