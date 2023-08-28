import React, { ChangeEvent, useEffect, useState } from "react";
import * as S from "./styled";
import { formatDateToEurope } from "../../utils";

interface DateProps {
  value: string;
  minDate?: string;
  maxDate?: string; 
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  bold?: boolean;
  border?: "default" | "pill" | "rounded";
  borderStyle?: "dotted" | "dashed" | "solid";
  borderColor?: string;
  colorDate?: string;
  backgroundColorInput?:string;
  displayHours?: string;
}

function Date({
  value,
  minDate,
  maxDate,
  onChange,
  disabled,
  bold,
  border = "default",
  borderStyle,
  borderColor,
  colorDate,
  backgroundColorInput,
  displayHours = "datetime-local"
}: DateProps): JSX.Element {
  const [selectedDate, setSelectedDate] = useState(formatDateToEurope(value));

  useEffect(() => {
    setSelectedDate(formatDateToEurope(value));
  }, [value]);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <S.DateInputWrapper>
      <S.DateInput
        type={"date"}
        value={selectedDate}
        onChange={handleDateChange}
        disabled={disabled}
        bold={bold}
        borderColor={borderColor}
        border={border}
        borderStyle={borderStyle}
        colorDate={colorDate}
        backgroundColorInput={backgroundColorInput}
        min={minDate && formatDateToEurope(minDate)}
        max={maxDate && formatDateToEurope(maxDate)}
      />
    </S.DateInputWrapper>
  );
}

export default Date;
