import React, { ReactNode } from "react";
import * as S from "./styled";

interface TouchOverlayProps {
  onClick: () => void;
  children: ReactNode;
}

function TouchOverlay({ onClick, children }: TouchOverlayProps): JSX.Element {
  return <S.TouchOverlay onClick={onClick}>{children}</S.TouchOverlay>;
}

export default TouchOverlay;
