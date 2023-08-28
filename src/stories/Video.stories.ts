import { Meta, StoryObj } from "@storybook/react";
import { Video } from "../components";

export default {
  title: "Components/Video",
  component: Video,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

export const Default: StoryObj = {
  args: {
    src: "https://www.youtube.com/watch?v=Q4BCszJMNdw",
    controls: true,
    autoPlay: true,
    width: "200px",
    height: '200px',
    muted:false,
    loop: true
  },
};
