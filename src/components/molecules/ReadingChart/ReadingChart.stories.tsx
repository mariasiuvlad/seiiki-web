import React from 'react'
import {Story, Meta} from '@storybook/react'
import ReadingChart, {ReadingChartProps} from './ReadingChart'
import mocks from './mocks'

export default {
  title: 'Molecules/ReadingChart',
  component: ReadingChart,
  argTypes: {
    sensor: {table: {disable: true}},
    interval: {table: {disable: true}},
    type: {control: {type: 'radio', options: ['line', 'area']}}
  }
} as Meta

const mockDataSouce = () => mocks

const Template: Story<ReadingChartProps> = (args) => (
  <ReadingChart
    interval={12}
    sensor="bedroom"
    className="flex-grow w-full"
    useDataSource={mockDataSouce}
    {...args}
  />
)

export const Combined = Template.bind({})
Combined.args = {
  type: 'line',
  humi: true,
  temp: true
}

export const Temperature = Template.bind({})
Temperature.args = {
  type: 'line',
  temp: true,
  humi: false
}

export const Humidity = Template.bind({})
Humidity.args = {
  type: 'line',
  temp: false,
  humi: true
}
