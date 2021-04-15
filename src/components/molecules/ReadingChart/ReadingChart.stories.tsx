import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import ReadingChart, {ReadingChartProps} from './ReadingChart'
import mocks from './mocks'

export default {
  title: 'Example/ReadingChart',
  component: ReadingChart,
  argTypes: {
    sensor: {table: {disable: true}},
    interval: {table: {disable: true}},
    useData: {table: {disable: true}},
    type: {control: {type: 'radio', options: ['line', 'area']}}
  }
} as Meta

const useMockData = () => mocks

const Template: Story<ReadingChartProps> = (args) => {
  return (
    <ReadingChart
      useData={useMockData}
      interval={null}
      sensor={null}
      className="flex-grow w-full"
      {...args}
    />
  )
}

export const Temperature = Template.bind({})
Temperature.args = {
  type: 'line',
  temp: true
}

export const Humidity = Template.bind({})
Humidity.args = {
  type: 'line',
  humi: true
}

export const Combined = Template.bind({})
Combined.args = {
  type: 'line',
  humi: true,
  temp: true
}
