import styled from "styled-components";
import { theme } from "../../styled/theme";
import Banner from "../../assets/images/banner.jpg";

export const Section = styled.section`
  background-image: linear-gradient(
      to right bottom,
      rgba(251, 252, 255, 0.8),
      rgba(251, 252, 255, 0.8)
    ),
    url(${Banner});
  background-size: cover;
  padding: 25rem 0;
`;

export const Intro = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 30rem;
  color: ${theme.text.def};
`;

export const H1 = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

export const H2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;
