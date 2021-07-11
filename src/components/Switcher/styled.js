import styled from "styled-components";
import { theme } from "../../styled/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  user-select: none;
  position: relative;
  height: 3.5rem;
  background-color: ${theme.neutral.two};
  width: fit-content;
`;

export const Slider = styled.div`
  position: absolute;
  z-index: 1;
  border-radius: 0.3rem;
  background-color: white;
  left: ${(props) => `${props.position}px`};
  width: ${(props) => `${props.width}px`};
  height: 2.5rem;
  transition: all 0.2s;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  outline: none;
  border-radius: 0.5rem;
  border: none;
  width: 85px;
  font-weight: 500;
  z-index: 2;
  color: ${theme.text.alt};
  background-color: transparent;
`;
