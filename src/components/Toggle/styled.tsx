import styled from "styled-components";
import { getContrastColor } from "../../utils";

interface Props {
  isOn: boolean;
  color?: string;
  disabled?: boolean;
  showText?: boolean;
}

export const ToggleContainer = styled.div<Partial<Props>>`
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Slider = styled.div<Props>`
  width: 62px;
  height: 32px;
  background-color: ${({ isOn, color, disabled }) =>
    disabled ? "#b2a9a9" : isOn ? color || "#4CAF50" : "#ccc"};
  border-radius: 20px;
  position: relative;
  transition: background-color 0.3s ease-in-out;
`;

export const SliderButton = styled.div<Partial<Props>>`
  width: 29px;
  height: 28px;
  background-color: ${(props) => (props.disabled ? "#dfdfdf" : "white")};
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: ${({ isOn }) => (isOn ? "calc(100% - 30px)" : "2px")};
  transition: left 0.3s ease-in-out;
`;

export const ToggleText = styled.div<Partial<Props>>`
  color: ${(props) =>
    props.disabled
      ? "#dfdfdf"
      : props.color && !props.disabled && props.isOn
      ? getContrastColor(props.color)
      : "#ffffff"};
  padding: 5px;
  position: absolute;
  top: 50%;
  font-size: 12px;
  font-weight: bold;
  transform: translateY(-50%)
    translateX(${(props) => (props.isOn ? "0%" : "80%")});
`;
