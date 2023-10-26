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
    value: "120,05",
    currency: "R$",
    color: "green",
    bold: true,
    fontSize: 12,
    strike: false,
    decimalCut: false,
  },
};

export const Disabled: StoryObj = {
  args: {
    value: "1.200,80",
    currency: "R$",
    fontSize: 15,
    strike: true,
    decimalCut: false,
  },
};

export const Size: StoryObj = {
  args: {
    color: "red",
    value: "30",
    currency: "€",
    fontSize: 28,
    strike: false,
    decimalCut: true,
  },
};
