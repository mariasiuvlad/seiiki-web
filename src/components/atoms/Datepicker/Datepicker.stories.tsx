import React, {useState} from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import Datepicker, {DatepickerProps} from './Datepicker'
import {DateTime} from 'luxon'

export default {
  title: 'Atoms/Datepicker',
  component: Datepicker
} as Meta

const Template: Story<DatepickerProps> = (args) => {
  const [date, setDate] = useState(DateTime.now())
  return <Datepicker {...args} date={date} onChange={setDate} />
}

export const Default = Template.bind({})
Default.args = {hasTime: false}

export const WithTime = Template.bind({})
WithTime.args = {
  hasTime: true
}
