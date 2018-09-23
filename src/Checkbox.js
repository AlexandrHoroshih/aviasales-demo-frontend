import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & label {
    display: inline;
  }
`;

const Label = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
  font-size: 12px;
  color: #4a4a4a;
`;

const StyledCheckbox = styled.input`
  display: none;
  & + label {
    width: 18px;
    height: 18px;
    border: 1px solid #00ace2;
    border-radius: 4px;
    background: #ffffff;
    margin-right: 6px;
    display: inline-block;
    position: relative;
  }
  & + label:active {
    background: #e1f8ff;
  }
  &:checked + label {
    background: #e1f8ff;
    border: 1px solid #00ace2;
    color: #00ace2;
  }
  &:checked + label:after {
    content: "✔";
    font-size: 14px;
    position: absolute;
    top: 2px;
    left: 3px;
    color: #00ace2;
  }
`;

class Checkbox extends Component {
  state = {
    isChecked: false
  };

  toggleChecked = () => {
    if (this.state.isChecked) {
      this.setState({ isChecked: false });
    } else {
      this.setState({ isChecked: true });
    }
  };

  render() {
    return (
      <Wrapper>
        <StyledCheckbox
          type="checkbox"
          id={this.props.label}
          onClick={this.toggleChecked}
          checked={this.state.isChecked}
        />
        <label htmlFor={this.props.label} />
        <Label>{this.props.label}</Label>
      </Wrapper>
    );
  }
}

export default Checkbox;
