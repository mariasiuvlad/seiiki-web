import {Story, Meta} from '@storybook/react'
import Switch, {SwitchProps} from './Switch'

export default {
  title: 'Atoms/Switch',
  component: Switch
} as Meta

const defaultArgs: SwitchProps = {
  isOn: true,
  className: 'm-4',
  onClick: () => null
}

const Template: Story<SwitchProps> = (args) => {
  return <Switch {...args} />
}

export const On = Template.bind({})
On.args = {
  ...defaultArgs
}

export const Off = Template.bind({})
Off.args = {
  ...defaultArgs,
  isOn: false
}
