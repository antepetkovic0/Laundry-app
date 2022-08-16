import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Slider = styled.div`
  position: absolute;
  z-index: 1;
  border-radius: 0.3rem;
  background-color: white;
  left: ${(props) => `${props.position}px`};
  width: ${(props) => `${props.width}px`};
  height: 2.5rem;
  transition: all 0.2s;
`;

const Item = ({ children, onClick }) => (
  <button className="switcher__item" type="button" onClick={onClick}>
    {children}
  </button>
);

// TODO set sliderPosition dependant of value prop
const Switcher = ({ value, options, onChange }) => {
  const [sliderPosition, setSliderPosition] = useState(5);

  const handleItemClick = (e) => {
    console.log(e.target);
    if (e.target.offsetLeft === sliderPosition && sliderPosition < 85) {
      setSliderPosition(e.target.nextElementSibling.offsetLeft);
    } else if (e.target.offsetLeft === sliderPosition && sliderPosition > 85) {
      setSliderPosition(e.target.previousElementSibling.offsetLeft);
    } else {
      setSliderPosition(e.target.offsetLeft);
    }

    onChange(e.target.textContent);
  };

  const items = options.map((option, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Item key={i} onClick={handleItemClick}>
      {option}
    </Item>
  ));

  return (
    <div className="switcher">
      <Slider width={85} position={sliderPosition} />
      {items}
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Switcher.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Switcher;
