import React from 'react'
import cx from 'classnames'

import {Column, Row} from 'components/atoms/Flex'
import Typography from 'components/atoms/Typography'

import useWeather from 'hooks/useWeather'
import Chart from './Chart'

import style from './Weather.module.css'

export interface WeatherProps {
  className?: string
  useWeatherHook?(): any
}

const Weather: React.FC<WeatherProps> = ({className, useWeatherHook = useWeather}) => {
  const {currently, daily, hourly} = useWeatherHook()

  return (
    <Column className={cx(className, style.root)}>
      <Column className="justify-start dark:border-gray-900 p-4">
        <Row className="text-white font-extralight text-2xl">
          <Typography className="mr-4" text={`${Math.round(currently.temperature)}°`} />
          <Typography text={currently.summary} />
        </Row>
        <Typography className="uppercase text-xs text-gray-200" text={daily.summary} />
      </Column>
      <Row className="overflow-x-auto flex-grow">
        <Chart data={hourly.data} />
      </Row>
    </Column>
  )
}

export default Weather
