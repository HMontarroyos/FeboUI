import styled, { keyframes } from "styled-components";
import { lighten } from "polished";
import { sizeVariants } from "../../global";

interface Props {
  backgroundColor: string;
  color?: string;
  size?: "small" | "medium" | "large";
  bold?: boolean;
  disabled?: boolean;
}

export const Button = styled.button<Props>`
  position: relative;
  width: ${(props) => (props.size ? sizeVariants[props.size].width : "150px")};
  height: ${(props) => (props.size ? sizeVariants[props.size].height : "40px")};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) =>
    props.disabled
      ? "#b2a9a9"
      : props.color && !props.disabled
      ? props.color
      : "#ffffff"};
  border-radius: 10px;
  cursor: pointer;
  border: none;

  &:disabled {
    background-color: #dfdfdf;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => lighten(0.1, props.backgroundColor)};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.div<Partial<Props>>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: ${(props) => (props.size ? sizeVariants[props.size].size : "16px")};
  height: ${(props) => (props.size ? sizeVariants[props.size].size : "16px")};
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: ${(props) =>
    props.disabled
      ? "4px solid #b2a9a9"
      : props.color
      ? `4px solid ${props.color}`
      : "4px solid #007bff"};
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const Label = styled.p<Partial<Props>>`
  font-size: ${(props) =>
    props.size ? sizeVariants[props.size].size : "16px"};
  font-weight: ${(props) => props.bold && "bold"};
  margin: 0;
  text-align: center;
`;
