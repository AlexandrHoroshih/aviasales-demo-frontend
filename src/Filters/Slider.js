import React, { Component } from "react";
import styled from "styled-components";
import { Slider, Handles, Tracks } from "react-compound-slider";

const Wrapper = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
`;

const TimeSlider = styled(Slider)`
  position: relative;
  width: 95%;
  height: 16px;
`;

const Rail = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  margin: 7.5px 0 0 0;
  border-radius: 2px;
  border: 1px solid #d6d9da;
  background: #ffffff;
`;

function Handle({ handle: { id, value, percent }, getHandleProps }) {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: "absolute",
        marginLeft: 0,
        marginTop: 0,
        zIndex: 2,
        width: 16,
        height: 16,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: "50%",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#D6D9DA",
        backgroundColor: "#FFFFFF"
      }}
      {...getHandleProps(id)}
    />
  );
}

function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        position: "absolute",
        height: 2,
        zIndex: 1,
        marginTop: 8,
        backgroundColor: "#00ACDE",
        borderRadius: 2,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`
      }}
      {...getTrackProps()}
    />
  );
}

class HandledSlider extends Component {
  render() {
    return (
      <Wrapper>
        <TimeSlider domain={[0, 100]} values={[0, 100]}>
          <Rail />
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </TimeSlider>
      </Wrapper>
    );
  }
}

export default HandledSlider;
