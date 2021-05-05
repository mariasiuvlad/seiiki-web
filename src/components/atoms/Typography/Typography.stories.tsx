import React from 'react'
import cx from 'classnames'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import Typography, {
  TitlePrimary,
  ParagraphPrimary,
  ParagraphSecondary,
  TypographyProps
} from './Typography'

export default {
  title: 'Atoms/Typography',
  component: Typography
} as Meta

const Template: Story<TypographyProps> = ({className, ...args}) => (
  <>
    <Typography className={cx(className, 'text-xs')} {...args} />
    <ParagraphSecondary className={cx(className)} {...args} />
    <ParagraphPrimary className={cx(className)} {...args} />
    <Typography className={cx(className, 'text-xl')} {...args} />
    <TitlePrimary className={cx(className)} {...args} />
    <Typography className={cx(className, 'text-3xl')} {...args} />
    <Typography className={cx(className, 'text-4xl')} {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: 'The quick brown fox jumps over the lazy dog'
}

export const Light = Template.bind({})
Light.args = {
  children: 'The quick brown fox jumps over the lazy dog',
  light: true
}
