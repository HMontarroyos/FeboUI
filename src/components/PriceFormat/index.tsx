import React, { useState, useEffect } from "react";
import * as S from "./styled";

interface PriceFormatProps {
  value: string;
  color?: string;
  fontSize?: number;
  bold?: boolean;
  currency: string;
  decimalCut?: boolean;
  strike?: boolean;
}

function PriceFormat({
  value,
  color,
  bold,
  currency,
  fontSize = 12,
  decimalCut = false,
  strike = false,
}: PriceFormatProps): JSX.Element {
  const [formattedValue, setFormattedValue] = useState(value);

  useEffect(() => {
    const sanitizedValue = value.replace(",", ".").replace(/[^\d.]/g, "");
    const isValidValue = !isNaN(parseFloat(sanitizedValue)) && isFinite(parseFloat(sanitizedValue));
    const isValidCurrency = /^[$€£¥₹R₽]/.test(currency);

    if (isValidValue && isValidCurrency) {
      let [integerPart, decimalPart] = sanitizedValue.split(".");

      if (decimalCut) {
        decimalPart = "";
      }

      if (decimalPart && decimalPart.length === 1) {
        decimalPart = `0${decimalPart}`;
      }

      const formatted = decimalPart
        ? `${integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${decimalPart}`
        : `${integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

      setFormattedValue(`${currency}${formatted}`);
    }
  }, [value, currency, decimalCut, fontSize, strike]);

  return (
    <S.Container>
      <S.TextPrice bold={bold} color={color} fontSize={fontSize} strike={strike}>
        {formattedValue}
      </S.TextPrice>
    </S.Container>
  );
}

export default PriceFormat;
