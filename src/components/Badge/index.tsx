import React from "react";
import * as S from "./styled";

interface BadgeProps {
  label?: string;
  color?: string;
  backgroundColor: string;
  disabled?: boolean;
  bold?: boolean;
  border?: "default" | "pill" | "rounded";
  borderStyle?: "dotted" | "dashed" | "solid";
  borderColor?: string;
}

function Badge({
  label,
  backgroundColor,
  disabled,
  bold,
  border = "default",
  borderStyle,
  color,
  borderColor = color
}: BadgeProps): JSX.Element {
  return (
    <S.Badge
      backgroundColor={backgroundColor}
      disabled={disabled}
      color={color}
      borderColor={borderColor}
      border={border}
      borderStyle={borderStyle}
    >
      <S.Text bold={bold} color={color}>{label}</S.Text>
    </S.Badge>
  );
}

export default Badge;
