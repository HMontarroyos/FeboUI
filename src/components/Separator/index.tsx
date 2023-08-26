import React from "react";
import * as S from "./styled";

interface SeparatorProps {
  spacing: number;
  horizontal?: boolean;
}

function Separator({ spacing, horizontal}: SeparatorProps): JSX.Element {
  return <S.Separator spacing={spacing} horizontal={horizontal}/>;
}

export default Separator;
