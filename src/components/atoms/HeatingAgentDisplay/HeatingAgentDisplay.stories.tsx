import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import HeatingAgentDisplay, {HeatingAgentDisplayProps} from './HeatingAgentDisplay'

export default {
  title: 'Example/HeatingAgentDisplay',
  component: HeatingAgentDisplay
} as Meta

const Template: Story<HeatingAgentDisplayProps> = (args) => <HeatingAgentDisplay {...args} />

export const On = Template.bind({})
On.args = {
  isOn: true
}

export const Off = Template.bind({})
Off.args = {
  isOn: false
}
