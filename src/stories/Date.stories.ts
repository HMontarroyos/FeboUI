import { Meta, StoryObj } from '@storybook/react'
import { Date } from '../components'

export default {
  title: 'Components/Date',
  component: Date,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colorDate: { control: 'color' },
    backgroundColorInput: { control: 'color' },
  },
} as Meta

export const Default: StoryObj = {
    args: {
      value:"2017-06-03",
      disabled: false,
      bold: true,
      border: "default",
      borderStyle: "solid",
      borderColor: "black",
      colorDate: "black",
      backgroundColorInput: "white",
      minDate:"2017-06-02",
      maxDate: "2017-06-05",
      onChange: () => console.log("TESTE"),
      },
  };
  