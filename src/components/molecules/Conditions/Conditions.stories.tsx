import {Story, Meta} from '@storybook/react'
import {DateTime} from 'luxon'
import {worker} from 'mocks/browser'
import {rest} from 'msw'
import mocks from '../ReadingChart/mocks'
import {ConditionsProps} from './Conditions'
import Conditions from './Suspense'

export default {
  title: 'Molecules/Conditions',
  component: Conditions,
  decorators: [
    (StoryFn) => {
      worker.use(rest.get('/api/sensor/list', (req, res, ctx) => res(ctx.json(sensors))))
      worker.use(rest.get('/api/sensor/current', (req, res, ctx) => res(ctx.json(mockResponse))))
      worker.use(rest.get('/api/sensor/chart', (req, res, ctx) => res(ctx.json(mocks))))
      return StoryFn()
    }
  ]
} as Meta

const sensors = ['alpha room', 'bedroom', 'living room']
const mockResponse = {
  className: '',
  temp: 24.8,
  humi: 40.2,
  time: DateTime.local().toISO()
}

const Template: Story<ConditionsProps> = (args) => {
  return <Conditions className="card h-64 mt-4" {...args} />
}

export const Default = Template.bind({})
Default.args = {}
