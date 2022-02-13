import styled from "styled-components";
import { theme } from "../../styled/theme";

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

export const SectionBorder = styled.div`
  width: 5rem;
  height: 0.8rem;
  background-color: ${theme.primary.def};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1.4rem;
`;

export const SectionDescription = styled.p`
  max-width: 50rem;
  text-align: center;
  color: ${theme.text.alt};
`;
