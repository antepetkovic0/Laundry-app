import styled from "styled-components";
import { theme } from "../../styled/theme";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.bg.def};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.05);
  grid-area: ${(props) => props.gridArea};
  border-radius: 0.8rem;
  padding: 1rem;
  position: relative;

  a {
    align-self: flex-end;
  }
`;

export const Header = styled.div`
  display: flex;
  font-weight: 500;
`;

export const Content = styled.div`
  flex: 1;
  margin: 1rem 0;

  & > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const SubTitle = styled.div`
  text-transform: uppercase;
  color: ${theme.text.alt};
  font-size: 1rem;
  font-weight: 500;
  margin-right: 0.5rem;
`;