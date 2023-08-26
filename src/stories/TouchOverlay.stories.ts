import { Meta, StoryObj } from '@storybook/react'
import { TouchOverlay } from '../components'

export default {
  title: 'Components/TouchOverlay',
  component: TouchOverlay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const Default: StoryObj = {
    args: {
        onClick: console.log("Hello Word")
      },
  };
