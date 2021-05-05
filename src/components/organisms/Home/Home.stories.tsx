import {Story, Meta} from '@storybook/react'
import readingChartMocks from 'components/molecules/ReadingChart/mocks'
import scheduleMocks from 'components/molecules/Schedule/mocks'
import weatherMocks from 'components/molecules/Weather/mocks'
import {DateTime} from 'luxon'
import {worker} from 'mocks/browser'
import {rest} from 'msw'
import Home from './Home'

export default {
  title: 'Organisms/Home',
  component: Home,
  decorators: [
    (StoryFn) => {
      worker.use(rest.get('/api/sensor/list', (req, res, ctx) => res(ctx.json(sensors))))
      worker.use(rest.get('/api/heating', (req, res, ctx) => res(ctx.json({state: true}))))
      worker.use(rest.get('/api/schedule', (req, res, ctx) => res(ctx.json(scheduleMocks))))
      worker.use(rest.get('/api/sensor/current', (req, res, ctx) => res(ctx.json(mockResponse))))
      worker.use(rest.get('/api/sensor/chart', (req, res, ctx) => res(ctx.json(readingChartMocks))))
      worker.use(
        rest.get('/api/weather/46.7712,23.6236', (req, res, ctx) => res(ctx.json(weatherMocks)))
      )
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

const Template: Story = () => {
  return <Home />
}

export const Default = Template.bind({})
