import styled from "styled-components";
import { borderVariants } from "../../global";

interface Props {
  disabled?: boolean;
  bold?: boolean;
  border?: "default" | "pill" | "rounded";
  borderStyle?: "dotted" | "dashed" | "solid";
  borderColor?: string;
  colorDate?: string;
  backgroundColorInput?: string;
}

export const DateInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DateInput = styled.input<Props>`
  padding: 8px;
  color: ${(props) =>
    props.disabled
      ? "#6D6D6D"
      : props.colorDate && !props.disabled
      ? props.colorDate
      : "#ffffff"};
  font-weight: ${(props) => props.bold && "bold"};
  border-width: 2px;
  border-radius: ${(props) =>
    props.border ? borderVariants[props.border].borderRadius : "none"};
  border-style: ${(props) => (props.borderStyle ? props.borderStyle : "none")};
  border-color: ${(props) =>
    props.disabled
      ? "#b2a9a9"
      : props.borderColor && !props.disabled
      ? props.borderColor
      : props.color} !important;
  background-color: ${(props) =>
    props.disabled ? "#dfdfdf" : props.backgroundColorInput};
  cursor: ${(props) => props.disabled && "not-allowed"};
`;
