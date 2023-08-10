import { Meta, StoryObj } from '@storybook/react'
import { Loading } from '../components'

export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    show: true,
  },
} as Meta

export const Default: StoryObj = {}