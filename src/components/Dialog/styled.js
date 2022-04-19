import styled from "styled-components";
import { theme } from "../../styled/theme";

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DialogHeader = styled.h3`
  text-align: center;
`;

export const DialogBody = styled.div`
  padding: 3rem 0 2rem;
  max-height: 500px;
  overflow: auto;

  & > div {
    text-align: center;
  }
`;

export const DialogFooter = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  padding-top: 20px;
  border-top: 1px solid ${theme.neutral.two};
`;
