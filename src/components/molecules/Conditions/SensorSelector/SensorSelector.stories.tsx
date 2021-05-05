import {Story, Meta} from '@storybook/react'
import {identity} from 'ramda'
import SensorSelector, {SensorSelectorProps} from './SensorSelector'

export default {
  title: 'Molecules/SensorSelector',
  component: SensorSelector,
  decorators: [
    (StoryFn) => (
      <div className="w-96 h-96 border border-black rounded-sm dark:border-white m-4 relative">
        {StoryFn()}
      </div>
    )
  ]
} as Meta

const sensors = [
  'bedroom',
  'living room',
  'kitchen',
  'bathroom',
  'garden',
  'attic',
  'pantry',
  'basement'
]

const defaultArgs: SensorSelectorProps = {
  items: sensors,
  defaultSelectedItem: sensors[0],
  onSelectedItemChange: identity
}

const Template: Story<SensorSelectorProps> = (args) => {
  return <SensorSelector {...args} />
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs
}
