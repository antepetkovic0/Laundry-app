import React from 'react';
import * as S from './style';

const Button = (props) => {
  const { buttonText, buttonType, handleButtonClick } = props;

  return (
    <S.Button>
      {buttonText}
    </S.Button>
  )
};

export default Button;