import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react'
import HeatingSwitch from './HeatingSwitch'
import {identity} from 'ramda'

export default {
  title: 'Molecules/HeatingSwitch',
  component: HeatingSwitch
} as Meta

const useHeatingHook = (args) => () => ({
  ...args,
  onToggle: () => null,
  nHours: identity
})

const defaultArgs = {
  className: 'm-4 w-48',
  isOn: true
}

const Template: Story = ({className, ...args}) => {
  return <HeatingSwitch className={className} useHeatingHook={useHeatingHook(args)} />
}

export const On = Template.bind({})
On.args = {
  ...defaultArgs,
  isOn: true
}

export const Off = Template.bind({})
Off.args = {
  ...defaultArgs,
  isOn: false
}

export const Loading = Template.bind({})
Loading.args = {
  ...defaultArgs,
  isOn: undefined
}
