import styled from "styled-components";
import { theme } from "../../styled/theme";

export const BtnContainer = styled.button`
  background-color: ${theme.primary.def};
  color: ${theme.white};
  border-radius: 0.3rem;
  padding: 1rem 2rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s;
  font-weight: 600;

  &:hover,
  &:focus {
    opacity: 0.85;
  }
`;
