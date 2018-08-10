import React, { Component } from "react";
import styled from "styled-components";
import line from "./media/line.svg";
import vk from "./media/vk.png";
import rss from "./media/rss.png";
import twitter from "./media/twitter.png";
import fb from "./media/facebook.png";

const Background = styled.div`
  background: #f8fcff;
  width: 100%;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Line = styled.img`
  max-width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  padding-top: 32px;
  padding-bottom: 24px;
`;

const Text = styled.div`
  margin-right: auto;
  max-width: 360px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 16px;

  color: #5c5c5c;

@media (max-width: 768px) {
  flex-basis: 100%;
  margin-right: 0;
  margin-bottom: 20px;
}

  & h1 {
    margin: 0;
    font-weight: bold;
    line-height: 20px;
    font-size: 16px;

    color: #5c5c5c;
  }

    & p {
      margin: 0;
    }
  }
`;

const ButtonsBlock = styled.div`
  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 20px;
  }
  margin-right: 10px;
`;

const Button = styled.img`
  margin-right: 6px;
`;

const Email = styled.div`
  @media (max-width: 768px) {
    flex-basis: 100%;
    max-width: 362px;
  }
  height: 34px;
  border: 1px solid #a0b0b9;
  border-radius: 2px;

  & input {
    border: none;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    padding: 7px 14px 7px 14px;

    &:: placeholder {
      color: #a0b0b9;
    }
  }

  & button {
    border: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background: #ff8e41;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
    text-align: center;

    color: #ffffff;

    padding: 8px 20px 6px 20px;
  }
`;

class Subscribe extends Component {
  render() {
    return (
      <Background>
        <Line src={line} alt="" />
        <div className="container">
          <Wrapper>
            <Text>
              <h1>Хотите знать всё о скидках на авиабилеты?</h1>
              <p>
                Вы можете подписаться на нашу рассылку через соцсети или по
                электронной почте.
              </p>
            </Text>
            <ButtonsBlock>
              <Button src={twitter} />
              <Button src={vk} />
              <Button src={fb} />
              <Button src={rss} />
            </ButtonsBlock>
            <Email>
              <input placeholder="Ваш email" />
              <button>Подписаться</button>
            </Email>
          </Wrapper>
        </div>
      </Background>
    );
  }
}

export default Subscribe;
