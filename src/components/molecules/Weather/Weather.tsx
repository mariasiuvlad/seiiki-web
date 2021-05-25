import React from 'react'
import cx from 'classnames'

import {Column, Row} from 'components/atoms/Flex'
import {
  ParagraphSecondary,
  ParagraphTertiary,
  TitlePrimary,
  TitleSecondary
} from 'components/atoms/Typography'

import useWeather from 'hooks/useWeather'
import Chart from './Chart'

import style from './Weather.module.css'
// import {Daily} from './Daily'

export type WeatherProps = {
  className?: string
  useDataSource?(): any
}

const Weather: React.FC<WeatherProps> = ({className, useDataSource = useWeather}) => {
  const {currently, daily, hourly} = useDataSource()

  return (
    <Column className={cx(className, style.root)}>
      <Column className="text-white dark:border-gray-900 gap-2 p-2">
        <Row className="mx-2">
          <TitleSecondary className="mr-4">{Math.round(currently.temperature)}°</TitleSecondary>
          <TitleSecondary>{currently.summary}</TitleSecondary>
        </Row>
        <ParagraphSecondary className="font-semibold mx-2 text-left text-yellow-200">
          {daily.summary}
        </ParagraphSecondary>
      </Column>
      <Row className="overflow-x-auto flex-grow">
        <Chart {...hourly} />
      </Row>
    </Column>
  )
}

export default Weather
