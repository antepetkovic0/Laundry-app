import styled from "styled-components";
import { theme } from "../../styled/theme";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100%; */
  width: 100%;
  /* max-width: 25rem; */
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 0;
  background: ${theme.bg.def};
  text-align: center;
  /* box-shadow: 3px 0px 5px rgba(0, 0, 0, 0.2); */
  box-shadow: ${({ isOpened }) =>
    (isOpened && "3px 0px 5px rgba(0, 0, 0, 0.2)") || "none"};
  z-index: 200;
  transform: ${({ isOpened }) =>
    (isOpened && "translateY(0)") || "translateY(-100%)"};
  transition: transform 0.4s ease-out;
`;

export const Li = styled.li`
  margin: 1rem 0;
  color: ${theme.text.alt};

  &:active,
  &:hover {
    color: ${theme.primary.def};
  }
`;
