import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: ${({ isAuthRelated }) => {
    if (isAuthRelated) {
      return "calc(100vh - 38px)";
    }
    return "100vh";
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 75vh;
  object-fit: contain;
`;

export const MessageContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Message = styled.div`
  padding: 0 1rem 1rem 1rem;
  text-align: center;
  font-size: 1.6rem;
`;
