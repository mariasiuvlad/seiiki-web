import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import {WeatherProps} from './Weather'
import Weather from './Weather'
import mocks from './mocks'

const useMockWeather = () => mocks

const Template: Story<WeatherProps> = (args) => (
  <Weather useWeatherHook={useMockWeather} {...args} />
)

export default {
  title: 'Example/Weather',
  component: Weather,
  argTypes: {useWeatherHook: {table: {disable: true}}}
} as Meta

export const Primary = Template.bind({})
Primary.args = {
  useWeatherHook: useMockWeather,
  className: ''
}
