import {Story, Meta} from '@storybook/react'
import {WeatherProps} from './Weather'
import Weather from './Weather'
import mocks from './mocks'

export default {
  title: 'Molecules/Weather',
  component: Weather
} as Meta

const Template: Story<WeatherProps> = (args) => <Weather useDataSource={() => mocks} {...args} />

export const Default = Template.bind({})
Default.args = {
  className: ''
}
