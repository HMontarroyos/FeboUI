import { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "../components";

export default {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

export const Default: StoryObj = {
  args: {
    checked: true,
    onChange: console.log("Hello Word"),
  },
};

export const Color: StoryObj = {
  args: {
    checked: true,
    onChange: console.log("Hello Word"),
    color: "red",
  },
};

export const Text: StoryObj = {
  args: {
    checked: true,
    onChange: console.log("Hello Word"),
    color: "#0d9ba2",
    disabled: false,
    showText: true,
  },
};

export const Disabled: StoryObj = {
  args: {
    checked: true,
    onChange: console.log("Hello Word"),
    color: "red",
    disabled: true,
    showText: false,
  },
};
