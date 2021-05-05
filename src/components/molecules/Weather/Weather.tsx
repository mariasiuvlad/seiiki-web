import React from 'react'
import cx from 'classnames'

import {Column, Row} from 'components/atoms/Flex'
import {ParagraphTertiary, TitlePrimary} from 'components/atoms/Typography'

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
      <Column className="text-white justify-start dark:border-gray-900 p-4">
        <Row>
          <TitlePrimary light className="mr-4">
            {Math.round(currently.temperature)}°
          </TitlePrimary>
          <TitlePrimary light>{currently.summary}</TitlePrimary>
        </Row>
        <ParagraphTertiary className="uppercase">{daily.summary}</ParagraphTertiary>
      </Column>
      <Row className="overflow-x-auto flex-grow">
        <Chart {...hourly} />
      </Row>
    </Column>
  )
}

export default Weather
