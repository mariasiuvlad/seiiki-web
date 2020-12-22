import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import ReadingChart, {ReadingChartProps} from './ReadingChart'
import mocks from './mocks'

export default {
  title: 'Example/ReadingChart',
  component: ReadingChart
} as Meta

const Template: Story<ReadingChartProps> = (args) => <ReadingChart {...args} />

const args = {data: mocks}

export const Combined = Template.bind({})
Combined.args = {
  ...args,
  humi: true,
  temp: true
}

export const Temperature = Template.bind({})
Temperature.args = {
  ...args,
  temp: true
}

export const Humidity = Template.bind({})
Humidity.args = {
  ...args,
  humi: true
}
