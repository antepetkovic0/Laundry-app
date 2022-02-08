import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoint } from "../../styled/breakpoint";
import { theme } from "../../styled/theme";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 0.5rem;
  background-color: ${theme.bg.def};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.05);
  overflow-x: auto;

  @media ${breakpoint.tablet} {
    flex-direction: column;
    width: fit-content;
    overflow-y: auto;
  }
`;

export const Li = styled(Link)`
  flex-shrink: 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${theme.text.alt};
  fill: ${theme.text.alt};
  transition: all 0.2s ease-in;
  padding: 0.8rem;
  border-radius: 8px;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    `
      color: ${theme.primary.def};
      fill: ${theme.primary.def};
      background-color: ${theme.neutral.one};

      &::after {
      content: "";
      position: absolute;
      top: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 1rem;
      height: 0.5rem;
      background-color: ${theme.primary.def};
      border-bottom-right-radius: 100px;
      border-bottom-left-radius: 100px;
      border-top-left-radius: 0;

      @media ${breakpoint.tablet} {
        width: 0.5rem;
        height: 1rem;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 0;
      }
    }
  `}

  &:hover {
    background-color: ${theme.neutral.one};
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
    @media ${breakpoint.tablet} {
      margin-bottom: 0.5rem;
      margin-right: 0;
    }
  }

  @media ${breakpoint.tablet} {
    &:nth-last-child(3) {
      margin-bottom: auto;
    }
  }

  span {
    margin-left: 0.5rem;
  }
`;

export const Signal = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${theme.error};
  top: 0.4rem;
  right: 0.4rem;
  border-radius: 100px;
`;

export const Content = styled.div`
  flex: 1;
  padding: 0 0 1rem 0;

  @media ${breakpoint.tablet} {
    padding: 0 0 1rem 1rem;
  }
`;

export const TableActionsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const TableAction = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: ${theme.neutral.two};
  fill: ${theme.text.alt};
  border-radius: 0.4rem;

  &:hover {
    background-color: ${theme.neutral.three};
  }

  transition: all 0.2s;
`;

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DialogHeader = styled.h3`
  /* margin-bottom: 2rem; */
  text-align: center;
`;

export const DialogBody = styled.div`
  padding: 3rem 0 2rem;
  max-height: 500px;
  overflow: auto;
`;

export const DialogFooter = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  padding-top: 20px;
  border-top: 1px solid ${theme.neutral.two};
`;
