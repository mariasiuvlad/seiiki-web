import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import SensorDisplay, {SensorDisplayProps} from './SensorDisplay'
import {DateTime} from 'luxon'

export default {
  title: 'Example/SensorDisplay',
  component: SensorDisplay
} as Meta

const Template: Story<SensorDisplayProps> = (args) => <SensorDisplay {...args} />

export const Default = Template.bind({})
Default.args = {
  temp: 24.8,
  humi: 40.2,
  time: DateTime.local().toISO()
}
