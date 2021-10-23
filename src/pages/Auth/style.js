import styled from "styled-components";
import { theme } from "../../styled/theme";
import { breakpoint } from "../../styled/breakpoint";
import RegisterImg from "../../assets/images/register_feature_small.jpg";

export const ContentWrapper = styled.div`
  height: calc(100vh - 38px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoint.tablet} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Banner = styled.div`
  width: 100%;
  min-height: 20rem;
  padding: 0 2rem;
  background-image: url(${RegisterImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;

  @media ${breakpoint.tablet} {
    width: 50%;
    min-height: 100%;
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
  margin-top: 2rem;

  &:hover {
    opacity: 0.9;
  }
`;
