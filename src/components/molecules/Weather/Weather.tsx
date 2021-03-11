import React from 'react'
import {DateTime} from 'luxon'
import cx from 'classnames'

import {Column, Row} from 'components/atoms/Flex'
import Typography from 'components/atoms/Typography'

export interface WeatherProps {
  className?: string
  data: any
}

const Day = ({text, time, temperatureLow, temperatureHigh}) => {
  return (
    <Column key={time} className="mx-2 items-center">
      <Typography
        className="uppercase text-center font-extralight text-blue-700 dark:text-yellow-300"
        text={text}
      />
      <Row className="items-center">
        <Typography className="text-base font-light" text={`${Math.round(temperatureLow)}`} />
        <Typography className="font-extralight text-blue-700 dark:text-yellow-300 mx-1" text="/" />
        <Typography className="text-base font-light" text={`${Math.round(temperatureHigh)}`} />
      </Row>
    </Column>
  )
}

const Daily = ({data}) => {
  return data.map((item, index) => {
    const text = index === 0 ? 'Today' : DateTime.fromSeconds(item.time).toFormat('ccc')
    return <Day key={item.time} text={text} {...item} />
  })
}

const Weather: React.FC<WeatherProps> = ({className, data}) => {
  const {currently, daily} = data
  return (
    <Column className={cx(className, 'flex-grow p-4')}>
      <Row className="justify-between mb-4">
        <Column>
          <Row>
            <Typography
              className="font-extralight text-2xl text-shadow mr-4"
              text={`${Math.round(currently.temperature)}°C`}
            />
            <Typography className="font-extralight text-2xl" text={currently.summary} />
          </Row>
          <Typography className="font-extralight text-xl mr-4 mb-4" text={daily.summary} />
        </Column>

        <Typography
          className="font-extralight text-2xl text-right text-shadow"
          text={DateTime.local().toLocaleString(DateTime.TIME_SIMPLE)}
        />
      </Row>
      <Row className="justify-center items-center flex-grow">
        <Daily data={daily.data} />
      </Row>
    </Column>
  )
}

export default Weather
