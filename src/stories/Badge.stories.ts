import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components";

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const Sucess: StoryObj = {
  args: {
    label: "Sucess",
    backgroundColor: "#32c746",
    color: "white",
    disabled: false,
    bold: true,
    border: "default",
  },
};

export const Warning: StoryObj = {
  args: {
    label: "Warning",
    backgroundColor: "#FFFF00",
    color: "black",
    disabled: false,
    bold: true,
    border: "rounded",
  },
};

export const Error: StoryObj = {
  args: {
    label: "Error",
    backgroundColor: "#fc0000",
    color: "white",
    disabled: false,
    bold: true,
    border: "pill",
  },
};

export const Info: StoryObj = {
  args: {
    label: "Info",
    backgroundColor: "#0500fc",
    color: "white",
    disabled: false,
    bold: false,
    border: "rounded",
    borderStyle: "solid",
    borderColor: "white"
  },
};

export const Disabled: StoryObj = {
  args: {
    label: "Disabled",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    disabled: true,
    bold: true,
    border: "pill",
    borderStyle: "dashed",
    borderColor: "white"
  },
};
