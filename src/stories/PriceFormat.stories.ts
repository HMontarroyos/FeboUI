import { Meta, StoryObj } from "@storybook/react";
import { PriceFormat } from "../components";

export default {
  title: "Components/PriceFormat",
  component: PriceFormat,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    value: "130,00",
    color: "green",
    bold: true,
  },
};
