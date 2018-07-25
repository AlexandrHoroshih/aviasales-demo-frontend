import React from "react";
import styled from "styled-components";
import logo from "./media/Group.svg";
import edit from "./media/edit.svg";

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

export default function() {
  return (
    <Background>
      <div className="row center-xs">
        <div className="col-md-10">
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
            <div className="col-xs-6"> content</div>
            <div className="col-xs-6"> content </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
