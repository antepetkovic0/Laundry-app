/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Slider, Wrapper, Button } from "./styled";

const Item = ({ children, onItemClick }) => {
  console.log(children);
  return (
    <Button type="button" onClick={onItemClick}>
      {children}
    </Button>
  );
};

const myObject = {
  opt1: "Service",
  opt2: "User",
};

const Switcher = () => {
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

    dispatch({ type: "TOGGLE_SWITCH_HOME_ROLE" });
  };

  const reactionItems = Object.entries(myObject).map(([key, value]) => (
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

export default Switcher;
