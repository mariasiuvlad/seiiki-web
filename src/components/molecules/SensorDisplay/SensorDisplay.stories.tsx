import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import SensorDisplay, {SensorInfo} from './SensorDisplay'
import {DateTime} from 'luxon'

export default {
  title: 'Example/SensorDisplay',
  component: SensorDisplay,
  argTypes: {
    sensor: {table: {disable: true}},
    useSensorDisplayHook: {table: {disable: true}}
  }
} as Meta

const Template: Story<SensorInfo> = (args) => {
  return <SensorDisplay sensor={null} useSensorDisplayHook={() => args} {...args} />
}

export const Default = Template.bind({})
Default.args = {
  temp: 24.8,
  humi: 40.2,
  time: DateTime.local().toISO()
}
