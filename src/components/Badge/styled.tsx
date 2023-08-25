import styled from "styled-components";
import { borderVariants } from "../../global";

interface Props {
  backgroundColor: string;
  color?: string;
  borderColor?: string;
  size?: "small" | "medium" | "large";
  bold?: boolean;
  disabled?: boolean;
  border?: "default" | "pill" | "rounded";
  borderStyle?: "dotted" | "dashed" | "solid";
}

export const Badge = styled.div<Props>`
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: ${(props) =>
    props.disabled ? "#dfdfdf" : props.backgroundColor};
  color: ${(props) =>
    props.disabled
      ? "#b2a9a9"
      : props.color && !props.disabled
      ? props.color
      : "#ffffff"};
  border-color: ${(props) =>
    props.disabled
      ? "#b2a9a9"
      : props.borderColor && !props.disabled
      ? props.borderColor
      : props.color} !important;

  border-radius: ${(props) =>
    props.border ? borderVariants[props.border].borderRadius: "none"};
  border: none;
  border-width: 2px;
  border-style: ${(props) => (props.borderStyle ? props.borderStyle : "none")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
`;

export const Text = styled.p<Partial<Props>>`
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: ${(props) => props.bold && "bold"};
  text-align: center;
`;
