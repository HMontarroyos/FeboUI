import React from "react";
import * as S from "./styled";

interface PriceFormatProps {
  value: string;
  color?: string;
  bold?: boolean;
  currency: string;
}

function PriceFormat({
  value,
  color,
  bold,
  currency,
}: PriceFormatProps): JSX.Element {

const formatValue = () => {
  return value;
}


  return (
    <S.Container>
      <S.TextPrice bold={bold} color={color}>
        {formatValue()}
      </S.TextPrice>
    </S.Container>
  );
}

export default PriceFormat;
