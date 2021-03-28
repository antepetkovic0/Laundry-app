import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 70%;
  max-width: 25rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 0;
  background: #ffffff;
  text-align: center;
  box-shadow: 3px 0px 5px rgba(0, 0, 0, 0.2);
  z-index: 200;
  transform: ${({ isOpened }) =>
    isOpened && "translateX(0)" ||
    "translateX(-100%)"
  };
  transition: transform 0.4s ease-out;
`;

export const Ul = styled.ul`
  list-style: none;

  a {
    text-decoration: none;    
  }  
`;

export const Li = styled.li`
  text-decoration: none;
  margin: 1rem 0;
  color: black;
  font-size: 1.4rem;

  &:active,
  &:hover {
    color: blue;
  }
`;