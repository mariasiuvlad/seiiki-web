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
    <Column className={cx(className, 'flex-grow p-4 overflow-auto')}>
      <Row className="flex-wrap justify-between mb-4 gap-4">
        <Row>
          <Typography
            className="font-extralight text-2xl text-shadow mr-4"
            text={`${Math.round(currently.temperature)}°C`}
          />
          <Typography className="font-extralight text-2xl" text={currently.summary} />
        </Row>
        <Typography className="font-extralight text-2xl mr-4 mb-4" text={daily.summary} />
      </Row>
      <Row className="flex-grow overflow-x-auto mb-4">
        <Hourly data={hourly.data} />
      </Row>
      <Row className="flex-grow overflow-x-auto">
        <Daily data={daily.data} />
      </Row>
    </Column>
  )
}

export default Weather
