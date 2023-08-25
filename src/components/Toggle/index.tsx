import React, { useState, useEffect } from "react";
import * as S from "./styled";

interface ToggleProps {
  onChange?: (isOn: boolean) => void;
  defaultOn?: boolean;
  color?: string;
  disabled?: boolean;
  showText?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
  onChange,
  defaultOn = false,
  color,
  showText,
  disabled,
}) => {
  const [isOn, setIsOn] = useState(defaultOn);

  useEffect(() => {
    setIsOn(defaultOn);
  }, [defaultOn]);

  const handleToggle = () => {
    if (!disabled) {
      const newIsOn = !isOn;
      setIsOn(newIsOn);
      onChange && onChange(newIsOn);
    }
  };

  return (
    <S.ToggleContainer onClick={handleToggle} disabled={disabled}>
      <S.Slider
        isOn={isOn}
        color={color}
        disabled={disabled}
        showText={showText}
      >
        {showText && (
          <S.ToggleText isOn={isOn} disabled={disabled} color={color}>
            {isOn ? "ON" : "OFF"}
          </S.ToggleText>
        )}
        <S.SliderButton isOn={isOn} disabled={disabled} />
      </S.Slider>
    </S.ToggleContainer>
  );
};

export default Toggle;
