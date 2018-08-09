import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { lists } from "./menuLists";
import vk from "./vk.svg";
import fb from "./fb.svg";
import tw from "./tw.svg";
import ig from "./ig.svg";
import vib from "./vib.svg";
import apple from "./appstore.png";
import google from "./playstore.png";
import windows from "./phonestore.png";

const Background = styled.footer`
  background: #ffffff;
  font-family: Roboto;
  font-style: normal;
`;

const MenuWrapper = styled.div`
  padding: 35px 0 24px 0;
  @media (max-width: 768px) {
    padding: 30px 0 24px 0;
  }
  border-bottom: 1px solid #e0e6e8;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListTitle = styled.h1`
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  text-transform: uppercase;
  color: #4a4a4a;
  margin: 0 0 20px 0;
`;

const ListItem = styled.li`
  margin-bottom: 12px;

  & a {
    text-decoration: none;
    font-weight: normal;
    line-height: 16px;
    font-size: 12px;

    color: #5b5b5c;
  }
`;

const AllItems = styled.button`
  border: none;
  background: none;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  text-transform: capitalize;
  color: #4a4a4a;
  padding-left: 0;
`;

const LinksWrapper = styled.div`
  margin-top: 40px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const Company = styled.div`
  display: flex;
  flex-direction: flex-start;
  justify-content: flex-start;
  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;

const CompanyLink = styled(Link)`
  text-decoration: none;
  margin-right: 8px;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  @media (max-width: 576px) {
    margin-bottom: 8px;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: flex-start;
  justify-content: flex-start;
  margin-top: 18px;
  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;

const SocialLink = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin-right: 28px;
  & img {
    margin-right: 4px;
  }
  @media (max-width: 576px) {
    margin-bottom: 12px;
  }
`;

const Apps = styled.div`
  display: flex;
  flex-direction: flex-start;
  justify-content: flex-end;

  & a {
    margin-left: 10px;
    @media (max-width: 768px) {
      margin-left: 0;
      margin-right: 10px;
    }
    @media (max-width: 576px) {
      flex-basis: 100%;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

  @media (max-width: 576px) {
    flex-wrap: wrap;
    text-align: center;
  }
`;

const Hotels = styled.div`
  display: flex;
  flex-direction: flex-start;
  justify-content: flex-start;
  margin-top: 32px;
  margin-bottom: 43px;
  @media (max-width: 768px) {
    margin-bottom: 17px;
  }
  @media (max-width: 576px) {
    justify-content: center;
    width: 100%;
    margin-top: 12px;
  }
`;

const HotelsLink = styled.a`
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-decoration: none;
  color: #5b5b5c;
  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
  }
`;

const Trademark = styled.div`
  display: flex;
  flex-direction: flex-start;
  justify-content: flex-end;
  margin-top: 34px;
  & span {
    font-weight: normal;
    line-height: 16px;
    font-size: 12px;
    text-align: right;
    @media (max-width: 768px) {
      text-align: left;
    }
    color: #5b5b5c;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-top: 22px;
    margin-bottom: 40px;
  }

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Background>
        <MenuWrapper>
          <div className="container">
            <div className="row">
              {lists.map((list, index) => (
                <div className="col-xs-6 col-sm-3 col-lg-2" key={list.index}>
                  <List>
                    <ListTitle>{list.title}</ListTitle>
                    {list.items.map((item, index) => (
                      <ListItem key={item.index}>
                        <Link to={item.link}>{item.name}</Link>
                      </ListItem>
                    ))}
                    {list.allButton && (
                      <ListItem>
                        <AllItems>Все {list.title}→</AllItems>
                      </ListItem>
                    )}
                  </List>
                </div>
              ))}{" "}
            </div>
          </div>
        </MenuWrapper>
        <LinksWrapper>
          <div className="container">
            <Links>
              <div>
                <Company>
                  <CompanyLink to="/Search">О компании</CompanyLink>
                  <CompanyLink to="/Search">Партнёрская программа</CompanyLink>
                  <CompanyLink to="/Search">Реклама</CompanyLink>
                  <CompanyLink to="/Search">Вакансии</CompanyLink>
                  <CompanyLink to="/Search">Помощь</CompanyLink>
                  <CompanyLink to="/Search">Правила</CompanyLink>
                  <CompanyLink to="/Search">White Label авиабилеты</CompanyLink>
                </Company>
                <Social>
                  <SocialLink to="/Search">
                    <img src={vk} alt="vk" />Вконтакте
                  </SocialLink>
                  <SocialLink to="/Search">
                    <img src={fb} alt="vk" />Фейсбук
                  </SocialLink>
                  <SocialLink to="/Search">
                    <img src={ig} alt="vk" />Инстаграм
                  </SocialLink>
                  <SocialLink to="/Search">
                    <img src={tw} alt="vk" />Твиттер
                  </SocialLink>
                  <SocialLink to="/Search">
                    <img src={vib} alt="vk" />Вайбер
                  </SocialLink>
                </Social>
                <Hotels>
                  <HotelsLink>Поиск и бронирование отелей</HotelsLink>
                </Hotels>
              </div>
              <div>
                <Apps>
                  <a>
                    <img src={apple} alt="appstore" />
                  </a>
                  <a>
                    <img src={google} alt="play store" />
                  </a>
                  <a>
                    <img src={windows} alt="windows phone" />
                  </a>
                </Apps>
                <Trademark>
                  <span>© 2007–2018, Aviasales — дешевые авиабилеты</span>
                </Trademark>
              </div>
            </Links>
          </div>
        </LinksWrapper>
      </Background>
    );
  }
}

export default Footer;
