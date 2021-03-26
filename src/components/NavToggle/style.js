import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 2.5rem;
  height: 3rem;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  /* this could also goes inside Line (referring to other components) */
  ${({ isOpened }) => isOpened && `
    ${Line} {
      background-color: transparent;
    };

    ${Line}::before {
      top: 0;
      transform: rotate(45deg);
    };

    ${Line}::after {
      top: 0;
      transform: rotate(-45deg);
    };
  `}
`;

export const Line = styled.span`
  &,
  &::before,
  &::after {
    display: inline-block;
    position: relative;
    width: inherit;
    height: 4px;
    background-color: white;
    border-radius: .5rem;
  };

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all .2s;
  };

  &::before {
    top: -.8rem;
  }
  &::after {
    top: .8rem;
  }
`;