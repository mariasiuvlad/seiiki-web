import React from 'react'
import cx from 'classnames'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import Typography, {TypographyProps} from './Typography'

export default {
  title: 'Example/Typography',
  component: Typography
} as Meta

const Template: Story<TypographyProps> = ({className, ...args}) => (
  <>
    <Typography className={cx(className, 'text-xs')} {...args} />
    <Typography className={cx(className, 'text-sm')} {...args} />
    <Typography className={className} {...args} />
    <Typography className={cx(className, 'text-xl')} {...args} />
    <Typography className={cx(className, 'text-2xl')} {...args} />
    <Typography className={cx(className, 'text-3xl')} {...args} />
    <Typography className={cx(className, 'text-4xl')} {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  as: 'h4',
  text: 'The quick brown fox jumps over the lazy dog'
}

export const Rounded = Template.bind({})
Rounded.args = {
  as: 'h5',
  text: 'The quick brown fox jumps over the lazy dog',
  rounded: true
}
