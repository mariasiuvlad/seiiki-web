import {Meta, Story} from '@storybook/react/types-6-0'
import Hero, {HeroProps} from './Hero'

const Template: Story<HeroProps> = (args) => <Hero {...args} />
export const Primary = Template.bind({})

Primary.args = {
  text: 'NextJS Boilerplate'
}

export default {
  title: 'Components/Hero',
  component: Hero
} as Meta
