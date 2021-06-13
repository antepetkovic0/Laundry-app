import styled from "styled-components";
import { colors } from "../../styled/theme";

export const Wrapper = styled.div`
  padding: 0.3rem;
  border-radius: 0.5rem;
  /* display: flex; */
  user-select: none;
  position: relative;
  height: 3rem;
  background-color: ${colors.bluePrimary};
  width: fit-content;
`;

export const Slider = styled.div`
  position: absolute;
  z-index: 1;
  border-radius: 0.3rem;
  background-color: white;
  left: ${(props) => `${props.position}px`};
  /* width: 10rem; */
  width: ${(props) => `${props.width}px`};
  height: 20px;
  transition: all 0.2s;
`;

export const Button = styled.button`
  outline: none;
  border-radius: 0.5rem;
  border: none;
  width: 10rem;
  height: 2.4rem;
  z-index: 2;
`;
