import React from 'react'
import {Story, Meta} from '@storybook/react'
import {SensorDisplayProps, SensorInfo} from './SensorDisplay'
import SensorDisplay from './Suspense'
import {DateTime} from 'luxon'

export default {
  title: 'Molecules/SensorDisplay',
  component: SensorDisplay
} as Meta

const mockDataSource: (SensorInfo) => () => SensorInfo = ({temp, humi, time}) => () => ({
  temp,
  humi,
  time
})

const Template: Story<SensorDisplayProps> = ({className, ...args}) => {
  return (
    <SensorDisplay className={className} sensor="bedroom" useDataSource={mockDataSource(args)} />
  )
}

export const Default = Template.bind({})
Default.args = {
  className: '',
  temp: 24.8,
  humi: 40.2,
  time: DateTime.local().toISO()
}

export const InsideCard = Template.bind({})
InsideCard.args = {
  ...Default.args,
  className: 'p-4 m-4 h-48 w-48 card'
}
