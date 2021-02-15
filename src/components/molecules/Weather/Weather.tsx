import React from 'react'
import cx from 'classnames'

import {Column, Row} from 'components/atoms/Flex'
import Typography from 'components/atoms/Typography'
import {DateTime} from 'luxon'

export interface WeatherProps {
  className?: string
  data: any
}

const Weather: React.FC<WeatherProps> = ({className, data}) => {
  const {currently} = data
  return (
    <Column className={cx(className, 'p-4')}>
      <Row className="justify-between mb-4">
      <Typography
          className="font-extralight text-4xl text-left text-shadow mr-8"
          text="Currently"
        />
        <Typography
          className="font-extralight text-4xl text-left text-shadow mr-8"
          text={DateTime.local().toLocaleString(DateTime.TIME_SIMPLE)}
        />
      </Row>
      <Row>
        <Typography
          className="font-extralight text-xl text-shadow text-left mr-4"
          text={`${Math.round(currently.temperature)}°C`}
        />
        <Typography
          className="font-extralight text-xl text-shadow text-center mr-4"
          text={`${currently.humidity}%`}
        />
        <Typography
          className="font-extralight text-xl text-left"
          text={currently.summary}
        />
      </Row>
    </Column>
  )
}

export default Weather
