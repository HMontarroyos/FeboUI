import { Meta, StoryObj } from '@storybook/react'
import { Separator } from '../components'

export default {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const Default: StoryObj = {
    args: {
        spacing: 20,
        horizontal: false
      },
  };
