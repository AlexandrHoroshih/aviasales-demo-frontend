import React from "react";
import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./agency-slider.css";
import arrow from "./sliderbtn.svg";

import aeroflot from "./aeroflot.png";
import s7 from "./s7.png";
import onetwo from "./12trip.png";
import ka from "./ka.png";

const Background = styled.div`
  background: #f8fcff;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;

  color: #5c5c5c;
`;

const SliderWrapper = styled.div`
  position: relative;
  height: 150px;
`;

const SlideContent = styled.div`
  display: flex;
  padding: 0 80px 0 80px;
  flex-direction: flex-start;
  flex-wrap: nowrap;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ArrowBack = styled.img`
  transform: scaleX(-1);
`;

const ArrowNext = styled.img``;

const Wrapper = styled.div`
  text-align: center;
`;

function AgencySlider() {
  return (
    <Background>
      <div className="container">
        <Wrapper>
          <Title>Дешёвые авиабилеты от крупнейших авиакомпаний и агенств</Title>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={7}
            totalSlides={2}
          >
            <SliderWrapper>
              <Slider classNameTray="slider-md">
                <Slide index={0}>
                  <SlideContent>
                    <img src={aeroflot} alt="aeroflot" />
                    <img src={s7} alt="s7" />
                    <img src={onetwo} alt="trip" />
                    <img src={ka} alt="korea" />
                    <img src={s7} alt="s7" />
                  </SlideContent>
                </Slide>
                <Slide index={1}>
                  <img src={s7} alt="s7" />
                  <img src={onetwo} alt="trip" />
                  <img src={ka} alt="korea" />
                </Slide>
              </Slider>
              <ButtonBack className="slider-button back">
                <ArrowBack src={arrow} alt="back" />
              </ButtonBack>
              <ButtonNext className="slider-button next">
                <ArrowNext src={arrow} alt="next" />
              </ButtonNext>
              <DotGroup className="slider-button dot" />
            </SliderWrapper>
          </CarouselProvider>
        </Wrapper>
      </div>
    </Background>
  );
}

export default AgencySlider;
