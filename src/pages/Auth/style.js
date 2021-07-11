import styled from "styled-components";
import { theme } from "../../styled/theme";
import { breakpoint } from "../../styled/breakpoint";

export const ContentWrapper = styled.div`
  border: 2px solid ${theme.gray.medium};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media ${breakpoint.tablet} {
    flex-direction: row;
  }
`;

export const Submit = styled.button`
  width: -webkit-fill-available;
  min-height: 38px;
  border-radius: 3px;
  background-color: ${theme.primary.def};
  color: ${theme.white};
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-top: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;
