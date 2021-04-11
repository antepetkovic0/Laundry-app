import styled from "styled-components";

export const Line = styled.span`
  &,
  &::before,
  &::after {
    display: inline-block;
    position: relative;
    width: 2rem;
    height: 3px;
    background-color: white;
    border-radius: 0.5rem;
    /* margin: 0 .3rem; */
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.6rem;
  }
  &::after {
    top: 0.6rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border-radius: 100px;

  /* border: 1px solid grey; */
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  /* background-color: transparent; */
  /* background: radial-gradient(circle, rgba(210,210,210,0.5) 0%, rgba(255,255,255,0.7) 100%); */
  box-shadow: inset 0px 0px 1.8rem 1.2rem rgba(255, 255, 255, 0.1);
  /* box-shadow: inset 0px 0px 1.8rem 1.2rem rgba(0, 0, 0, 0.1); */

  &:focus {
    outline: none;
  }

  /* this could also goes inside Line (referring to other components) */
  ${({ isOpened }) =>
    isOpened &&
    `
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
