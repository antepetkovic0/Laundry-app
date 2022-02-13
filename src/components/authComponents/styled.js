import styled from "styled-components";
import { theme } from "../../styled/theme";

export const Submit = styled.button`
  width: -webkit-fill-available;
  min-height: 38px;
  border-radius: 3px;
  background-color: ${theme.primary.def};
  color: ${theme.white};
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-top: 2rem;

  &:hover {
    opacity: 0.9;
  }
`;
