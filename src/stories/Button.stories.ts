import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const Small: StoryObj = {
    args: {
        size: "small",
        label: "Small",
        backgroundColor: "#ff8b4d",
        color: "white",
        disabled: false,
        bold: true,
        loading: false,
        onClick: console.log("Hello Word")
      },
  };
  
  export const Medium: StoryObj = {
    args: {
      size: "medium",
      label: "Medium",
      backgroundColor: "#f2dc91",
      color: "#2d1a1a",
      disabled: false,
      bold: false,
      loading: false,
      onClick: console.log("Hello Word")
    },
  };

    
  export const Large: StoryObj = {
    args: {
      size: "large",
      label: "Large",
      backgroundColor: "#56c04b",
      color: "#10431c",
      disabled: false,
      bold: true,
      loading: false,
      onClick: console.log("Hello Word")
    },
  };

  export const Disabled: StoryObj = {
    args: {
      size: "large",
      label: "Disabled",
      backgroundColor: "#000000",
      color: "#FFFFFF",
      disabled: true,
      bold: true,
      loading: false,
      onClick: console.log("Hello Word")
    },
  };

  export const Loading: StoryObj = {
    args: {
      size: "medium",
      label: "Loading",
      backgroundColor: "#475cb7",
      color: "#caf1d3",
      disabled: false,
      bold: false,
      loading: true,
      onClick: console.log("Hello Word")
    },
  };