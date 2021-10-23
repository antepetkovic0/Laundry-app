/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Size, Alignment } from "../../utils/constants";

const StyledDivider = styled.div`
  width: ${(props) => `${props.width}%`};
  flex: ${(props) => `0 1 ${props.width}%`};
  min-width: 10%;
  ${({ withText }) =>
    withText &&
    `
    flex: 1;
  `}
  border-bottom: ${(props) => `${props.weight}px solid ${props.color}`};
  margin: 10px auto;
`;

const DividerWithTextContainer = styled.div`
  height: 40px;
  align-items: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  min-width: fit-content;
  width: ${(props) => `${props.width}%`};
`;

const DividerText = styled.div`
  line-height: 0;
  padding-left: 5px;
  flex: 0 auto;
  padding-right: 5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${(props) => props.color};
  min-width: fit-content;
  font-size: ${(props) => {
    if (!props.fontSize) {
      return "1.2rem";
    }
    if (props.fontSize === Size.MEDIUM) {
      return "1.2rem";
    }
    if (props.fontSize === Size.LARGE) {
      return "1.4rem";
    }
    return "1rem";
  }};
`;

const DividerWithTextLeft = (props) => (
  <DividerWithTextContainer width={props.width}>
    <DividerText fontSize={props.fontSize} color={props.color}>
      {props.text}
    </DividerText>
    <StyledDivider
      weight={props.weight}
      color={props.color}
      width={props.width}
      withText
    />
  </DividerWithTextContainer>
);

const DividerWithTextRight = (props) => (
  <DividerWithTextContainer width={props.width}>
    <StyledDivider
      weight={props.weight}
      color={props.color}
      width={props.width}
      withText
    />
    <DividerText fontSize={props.fontSize} color={props.color}>
      {props.text}
    </DividerText>
  </DividerWithTextContainer>
);

const DividerWithCenteredText = (props) => (
  <DividerWithTextContainer width={props.width}>
    <StyledDivider
      weight={props.weight}
      color={props.color}
      width={props.width}
      withText
    />
    <DividerText fontSize={props.fontSize} color={props.color}>
      {props.text}
    </DividerText>
    <StyledDivider
      weight={props.weight}
      color={props.color}
      width={props.width}
      withText
    />
  </DividerWithTextContainer>
);

const Divider = (props) => {
  if (props.text && props.text.trim().length > 0) {
    if (props.textAlignment === Alignment.LEFT) {
      return <DividerWithTextLeft {...props} />;
    }
    if (props.textAlignment === Alignment.RIGHT) {
      return <DividerWithTextRight {...props} />;
    }
    return <DividerWithCenteredText {...props} />;
  }

  return (
    <StyledDivider
      weight={props.weight}
      color={props.color}
      width={props.width}
    />
  );
};

Divider.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  textAlignment: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

DividerText.propTypes = {
  fontSize: PropTypes.oneOf(Object.keys(Size).map((prop) => Size[prop]))
    .isRequired,
  color: PropTypes.string.isRequired,
};

DividerWithTextContainer.propTypes = {
  width: PropTypes.number,
};

StyledDivider.propTypes = {
  width: PropTypes.number,
  weight: PropTypes.number,
  color: PropTypes.string,
};

export default Divider;
