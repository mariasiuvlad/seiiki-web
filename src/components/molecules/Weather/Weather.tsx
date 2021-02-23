import React from 'react'
import cx from 'classnames'

import {Column, Row} from 'components/atoms/Flex'
import Typography from 'components/atoms/Typography'
import {DateTime} from 'luxon'

export interface WeatherProps {
  className?: string
  data: any
}

const Daily = ({data}) => {
  return data.map((item, index) => {
    return (
      <Column key={item.time} className="mx-2 items-center">
        <Typography
          className="uppercase text-center font-extralight text-blue-700 dark:text-yellow-300"
          text={index === 0 ? 'Today' : DateTime.fromSeconds(item.time).toFormat('ccc')}
        />
        <Row className="items-center">
          <Typography
            className="text-base font-light"
            text={`${Math.round(item.temperatureLow)}`}
          />
          <Typography
            className="font-extralight text-blue-700 dark:text-yellow-300 mx-1"
            text="/"
          />
          <Typography
            className="text-base font-light"
            text={`${Math.round(item.temperatureHigh)}`}
          />
        </Row>
      </Column>
    )
  })
}

const Weather: React.FC<WeatherProps> = ({className, data}) => {
  const {currently, daily} = data
  console.log(data, 'data')
  return (
    <Column className={cx(className, 'p-4')}>
      <Row className="justify-between mb-4">
        <Row>
          <Typography
            className="font-extralight text-2xl text-shadow mr-4"
            text={`${Math.round(currently.temperature)}°C`}
          />
          <Typography className="font-extralight text-2xl" text={currently.summary} />
        </Row>
        <Typography
          className="font-extralight text-2xl text-right text-shadow"
          text={DateTime.local().toLocaleString(DateTime.TIME_SIMPLE)}
        />
      </Row>
      <Typography className="font-extralight text-xl mr-4 mb-4" text={daily.summary} />
      <Row>
        <Daily data={daily.data} />
      </Row>
    </Column>
  )
}

export default Weather
