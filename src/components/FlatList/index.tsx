import React from "react";
import * as S from "./styled";

interface FlatListProps {
  quantity: number;
  children: React.ReactNode;
}

function FlatList({ quantity, children }: FlatListProps): JSX.Element {
  const elements = Array.from({ length: quantity }, (_, index) => (
    <React.Fragment key={index}>{children}</React.Fragment>
  ));

  return <S.Container>{elements}</S.Container>;
}

export default FlatList;
