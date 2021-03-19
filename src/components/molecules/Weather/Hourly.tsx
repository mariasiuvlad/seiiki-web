import {DateTime} from 'luxon'
import cx from 'classnames'
import {Column, Row} from 'components/atoms/Flex'
import {useMemo} from 'react'

export interface HourProps {
  time: number
  icon: string
  temperature: number
  humidity: number
}

export interface HourlyProps {
  data: HourProps[]
}

export const Hour: React.FC<HourProps> = ({time, icon, temperature, humidity}) => {
  return (
    <Column className="mx-2">
      <p className="text-lg font-thin mb-2">
        {DateTime.fromSeconds(time).toLocaleString(DateTime.TIME_SIMPLE)}
      </p>
      <Row>
        <i className={cx('wi', `wi-forecast-io-${icon}`)}></i>
        <p className="ml-2">{Math.round(temperature)}°C</p>
      </Row>
      <p className="hidden">{humidity * 100}%</p>
    </Column>
  )
}

export const Hourly: React.FC<HourlyProps> = ({data}) => {
  const hours = useMemo(
    () => data.filter(({time}) => DateTime.fromSeconds(time).weekday === DateTime.now().weekday),
    [data]
  )

  return (
    <Column>
      <h1 className="font-extralight text-2xl mb-2">Today</h1>
      <Row className="pb-4">
        {hours.map((hour) => (
          <Hour key={hour.time} {...hour} />
        ))}
      </Row>
    </Column>
  )
}
