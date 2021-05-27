import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import Select, {SelectProps} from './Select'

export default {
  title: 'Atoms/Select',
  component: Select
} as Meta

const defaultArgs = {
  className: '',
  items: [
    {value: 48, label: '48 hours'},
    {value: 24, label: '24 hours'},
    {value: 12, label: '12 hours'},
    {value: 8, label: '8 hours'},
    {value: 4, label: '4 hours'}
  ],
  defaultSelectedItem: {value: 24, label: '24 hours'}
}

const Template: Story<SelectProps> = (args) => (
  <Select containerClassName="inline-block mb-20" {...args} />
)

export const Default = Template.bind({})
Default.args = {...defaultArgs}
