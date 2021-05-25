import React, {useState} from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import Datepicker, {DatepickerProps} from './Datepicker'
import {Column} from '../Flex'
import TextInput from '../TextInput'
import {DateTime} from 'luxon'

export default {
  title: 'Atoms/Datepicker',
  component: Datepicker
} as Meta

const defaultArgs = {}

const Template: Story<DatepickerProps> = (args) => {
  const [date, setDate] = useState(DateTime.now())
  return (
    <Column className="relative h-96">
      <TextInput readOnly className="w-72" placeholder="Salut" value={date.toLocaleString()} />
      <div className="absolute top-12">
        <Datepicker {...args} onChange={setDate} />
      </div>
    </Column>
  )
}

export const Default = Template.bind({})
Default.args = {...defaultArgs}
