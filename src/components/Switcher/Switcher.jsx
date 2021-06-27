import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { toggleSwitcher } from "../../store/actions/switcher";
import { Slider, Wrapper, Button } from "./styled";

const Item = ({ children, onItemClick }) => (
  <Button type="button" onClick={onItemClick}>
    {children}
  </Button>
);

const Switcher = ({ type, options }) => {
  const [sliderPos, setSliderPos] = useState(5);

  const dispatch = useDispatch();

  const handleItemClick = (e) => {
    if (e.target.offsetLeft === sliderPos && sliderPos < 80) {
      setSliderPos(e.target.nextElementSibling.offsetLeft);
    } else if (e.target.offsetLeft === sliderPos && sliderPos > 80) {
      setSliderPos(e.target.previousElementSibling.offsetLeft);
    } else {
      setSliderPos(e.target.offsetLeft);
    }

    dispatch(toggleSwitcher(type));
  };

  const reactionItems = Object.entries(options).map(([key, value]) => (
    <Item key={key} onItemClick={handleItemClick}>
      {value}
    </Item>
  ));

  return (
    <Wrapper>
      <Slider width={80} position={sliderPos} />
      {reactionItems}
    </Wrapper>
  );
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

Switcher.propTypes = {
  type: PropTypes.string.isRequired,
  options: PropTypes.exact({
    option_one: PropTypes.string,
    option_two: PropTypes.string,
  }).isRequired,
};

export default Switcher;
