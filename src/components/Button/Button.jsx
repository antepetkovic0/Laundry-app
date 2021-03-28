import React from 'react';
import * as S from './style';

const Button = ({ buttonText, buttonType, handleButtonClick }) => {
  return (
    <S.Button>
      {buttonText}
    </S.Button>
  )
};

export default Button;