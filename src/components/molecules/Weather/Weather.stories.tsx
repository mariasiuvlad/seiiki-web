import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import {WeatherProps} from './Weather'
import Weather from './Weather'

export default {
  title: 'Example/Weather',
  component: Weather
} as Meta

const Template: Story<WeatherProps> = (args) => <Weather {...args} />

export const Primary = Template.bind({})
Primary.args = {
  className: ''
}
