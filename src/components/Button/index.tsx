import React from "react";
import * as S from "./styled";

interface ButtonProps {
  label?: string;
  color?: string;
  backgroundColor: string;
  disabled?: boolean;
  bold?: boolean;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  onClick: () => void;
}

function Button({
  label,
  backgroundColor,
  disabled,
  size = "medium",
  bold,
  color,
  loading,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      disabled={disabled}
      color={color}
      size={size}
      onClick={onClick}
    >
      {loading ? (
        <S.LoadingIcon size={size} color={color} disabled={disabled} />
      ) : (
        <S.Label size={size} bold={bold}>
          {label}
        </S.Label>
      )}
    </S.Button>
  );
}

export default Button;
