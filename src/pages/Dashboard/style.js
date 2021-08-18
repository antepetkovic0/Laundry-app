import styled from "styled-components";
import { breakpoint } from "../../styled/breakpoint";
import { theme } from "../../styled/theme";

export const DashWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem;
  min-height: 100vh;
  background-color: ${theme.bg.alt};

  @media ${breakpoint.tablet} {
    flex-direction: row;
  }
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
`;

export const DialogBody = styled.div`
  padding: 20px 0;
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
