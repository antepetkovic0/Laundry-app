import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { closeDrawer } from "../../actions/drawer";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
  top: 0;
  left: 0;
`;

const BackDrop = () => {
  const dispatch = useDispatch();

  const handleBackDropClick = () => {
    dispatch(closeDrawer("HOME"));
  };

  return <Wrapper onClick={handleBackDropClick} />;
};

export default BackDrop;
