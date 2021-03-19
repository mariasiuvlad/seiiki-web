import React from 'react'
import {DateTime} from 'luxon'
import {Column, Row} from 'components/atoms/Flex'
import Typography from 'components/atoms/Typography'

export const Day = ({text, time, temperatureLow, temperatureHigh}) => {
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

export const Daily = ({data}) => {
  return (
    <Column>
      <h1 className="font-extralight text-2xl mb-2">Upcoming</h1>
      <Row className="pb-4">
        {data.map((item, index) => {
          const text = index === 0 ? 'Today' : DateTime.fromSeconds(item.time).toFormat('ccc')
          return <Day key={item.time} text={text} {...item} />
        })}
      </Row>
    </Column>
  )
}
