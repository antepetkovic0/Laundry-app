/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState, useMemo } from "react";
import { Slider, Wrapper, Button } from "./styled";

const useHover = () => {
  const eventHandlers = useMemo(
    () => ({
      onMouseOver(e) {
        e.target.style.backgroundColor = "orange";
      },
      onMouseOut(e) {
        e.target.style.backgroundColor = "transparent";
      },
    }),
    []
  );

  return eventHandlers;
};
// const useHover = (fn, fn2) => {
//   // console.log(fn);
//   const [coords, setCoords] = useState();

//   const eventHandlers = useMemo(
//     () => ({
//       onMouseOver(e) {
//         // console.log(e.target.offsetWidth);
//         // console.log(e.target.offsetLeft);
//         fn(e.target.offsetWidth);
//         fn2(e.target.offsetLeft);
//         setCoords({ width: e.target.offsetWidth, left: e.target.offsetLeft });
//         e.target.classList.add("landed");
//       },
//       onMouseOut(e) {
//         console.log(e.target);
//         setCoords(null);
//         e.target.classList.remove("landed");
//       },
//     }),
//     []
//   );

//   return [coords, eventHandlers];
// };

const Item = ({ children, onItemClick }) => {
  const eventHandlers = useHover();
  return (
    <Button
      type="button"
      {...eventHandlers}
      onClick={onItemClick}
      // onMouseEnter={onItemHover}
    >
      {children}
    </Button>
  );
};

// const Item = ({ children, onWidthChange, onPosChange, onItemClick }) => {
//   const [coords, eventHandlers] = useHover(onWidthChange, onPosChange);
//   console.log(coords, eventHandlers);

//   return (
//     <button
//       type="button"
//       {...eventHandlers}
//       onClick={onItemClick}
//       // onMouseEnter={(e) => (e.target.style.background = "red")}
//     >
//       {children}
//     </button>
//   );
// };

const myObject = {
  opt1: "Laundry owner",
  opt2: "User",
};

const Switcher = () => {
  const [activeOpt, setActiveOpt] = useState();
  const [sliderWidth, setSliderWidth] = useState(10);
  const [sliderPos, setSliderPos] = useState(0);

  const handleWidthChange = (e) => {
    setSliderWidth(e);
  };
  const handlePosChange = (e) => {
    setSliderPos(e);
  };
  const handleItemClick = (e) => {
    console.log("cclcl");
    setSliderWidth(e.target.offsetWidth);
    setSliderPos(e.target.offsetLeft);
  };

  const handleItemHover = (e) => {
    e.target.style.backgroundColor = "orange";
  };

  const reactionItems = Object.entries(myObject).map(([key, value]) => (
    <Item
      key={key}
      // onWidthChange={handleWidthChange}
      // onPosChange={handlePosChange}
      onItemClick={handleItemClick}
      // onItemHover={handleItemHover}
    >
      {value}
    </Item>
  ));
  return (
    <Wrapper>
      <Slider width={sliderWidth} position={sliderPos} />
      {/* <div></div> */}
      {reactionItems}
      {/* <button
        type="button"
        onMouseEnter={(e) => console.log(e.target.offsetHeight)}
      >
        dsd
      </button>
      <button type="button">dsadaa</button> */}
    </Wrapper>
  );
};

export default Switcher;
