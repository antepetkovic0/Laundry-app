import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { theme } from "../../../styled/theme";
import { openDrawer } from "../../../store/actions/drawer";

const Line = styled.span`
  &,
  &::before,
  &::after {
    display: inline-block;
    position: relative;
    width: 2rem;
    height: 0.3rem;
    background-color: ${theme.neutral.four};
    border-radius: 0.5rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.6rem;
  }
  &::after {
    top: 0.6rem;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border-radius: 100px;
  cursor: pointer;

  /* this could also goes inside Line (referring to other components) */
  ${({ isOpened }) =>
    isOpened &&
    `
    ${Line} {
      background-color: transparent;
    };

    ${Line}::before {
      top: 0;
      transform: rotate(45deg);
    };

    ${Line}::after {
      top: 0;
      transform: rotate(-45deg);
    };
  `}
`;

const Hamburger = () => {
  const isDrawerOpen = useSelector((state) => state.drawerHome);

  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(openDrawer("HOME"));
  };

  return (
    <Button onClick={handleToggleClick} isOpened={isDrawerOpen}>
      <Line />
    </Button>
  );
};

export default Hamburger;
