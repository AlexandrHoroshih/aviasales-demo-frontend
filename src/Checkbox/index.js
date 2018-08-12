import React, { Component } from "react";
import styled from "styled-components";
import "./checkbox.css";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & label {
    display: inline;
  }
  & span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 36px;
    font-size: 12px;
    color: #4a4a4a;
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
        <input
          type="checkbox"
          id={this.props.label}
          className="checkbox"
          onClick={this.toggleChecked}
          checked={this.state.isChecked}
        />
        <label htmlFor={this.props.label} />
        <span>{this.props.label}</span>
      </Wrapper>
    );
  }
}

export default Checkbox;
