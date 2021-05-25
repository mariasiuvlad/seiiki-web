import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import Icon, {IconProps} from './Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon
} as Meta

const Template: Story<IconProps> = (args) => {
  return <Icon {...args} />
}
export const Default = Template.bind({})
Default.args = {name: 'AnnotationIcon'}
