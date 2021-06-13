import styled from "styled-components";
import { theme } from "../../styled/theme";

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
`;

export const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const LogoText = styled.div`
  margin-left: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.neutral.four};
`;

export const Domain = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${theme.text.def};
`;
