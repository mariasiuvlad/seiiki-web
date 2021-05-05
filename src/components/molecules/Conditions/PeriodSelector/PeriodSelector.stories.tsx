import {Story, Meta} from '@storybook/react'
import {identity} from 'ramda'
import PeriodSelector, {PeriodSelectorProps} from './PeriodSelector'

export default {
  title: 'Molecules/PeriodSelector',
  component: PeriodSelector
} as Meta

const periods = [
  {value: 12, label: 'last 12 hours'},
  {value: 24, label: 'last 24 hours'},
  {value: 48, label: 'last 48 hours'}
]

const defaultArgs: PeriodSelectorProps = {
  items: periods,
  defaultSelectedItem: periods[0],
  onSelectedItemChange: identity
}

const Template: Story<PeriodSelectorProps> = (args) => {
  return <PeriodSelector {...args} />
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs
}
