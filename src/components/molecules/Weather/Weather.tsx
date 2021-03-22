import React from 'react'
import cx from 'classnames'

import {Column, Row} from 'components/atoms/Flex'
import Typography from 'components/atoms/Typography'
import {Daily} from './Daily'
import {Hourly} from './Hourly'

export interface WeatherProps {
  className?: string
  data: any
}

const Weather: React.FC<WeatherProps> = ({className, data}) => {
  const {currently, daily, hourly} = data
  return (
    <Column className={cx(className, 'p-4 overflow-auto')}>
      <Column className="justify-start mb-4 border-b dark:border-gray-900">
        <Row>
          <Typography
            className="font-extralight text-2xl mr-4"
            text={`${Math.round(currently.temperature)}°C`}
          />
          <Typography className="font-extralight text-2xl" text={currently.summary} />
        </Row>
        <Typography className="uppercase text-xs text-gray-400 mr-4 mb-4" text={daily.summary} />
      </Column>
      <Row className="overflow-x-auto mb-4 border-b dark:border-gray-900">
        <Hourly data={hourly.data} />
      </Row>
      <Row className="overflow-x-auto">
        <Daily data={daily.data} />
      </Row>
    </Column>
  )
}

export default Weather
