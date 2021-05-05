import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import Button, {ButtonProps} from './Button'

export default {
  title: 'Atoms/Button',
  component: Button
} as Meta

const defaultArgs = {
  className: 'm-4',
  label: 'click me',
  variant: 'primary'
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {...defaultArgs}

export const Secondary = Template.bind({})
Secondary.args = {
  ...defaultArgs,
  variant: 'secondary'
}
