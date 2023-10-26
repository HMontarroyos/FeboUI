import { Meta, StoryObj } from "@storybook/react";
import { FlatList, Toggle } from "../components";

export default {
  title: "Components/FlatList",
  component: FlatList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;


export const Default: StoryObj = {
  args: {
    quantity: 5,
  }
};




