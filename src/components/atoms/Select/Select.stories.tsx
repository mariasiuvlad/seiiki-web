import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import Select, {SelectProps} from './Select'

export default {
  title: 'Example/Select',
  component: Select
} as Meta

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  options: [
    {value: 1, label: 'Heating On'},
    {value: 2, label: 'Heating Off'}
  ]
}
