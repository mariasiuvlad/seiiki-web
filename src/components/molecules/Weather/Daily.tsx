import React from 'react'
import {DateTime} from 'luxon'
import {Column, Row} from 'components/atoms/Flex'
import Typography from 'components/atoms/Typography'

export const Day = ({text, time, temperatureLow, temperatureHigh}) => {
  return (
    <Column key={time} className="mx-2 items-center">
      <Typography className="text-center text-sm uppercase text-gray-200" text={text} />
      <Row className="items-center text-white">
        <Typography className="text-base font-light" text={`${Math.round(temperatureLow)}`} />
        <Typography className="font-extralight text-gray-200 mx-1" text="/" />
        <Typography className="text-base font-light" text={`${Math.round(temperatureHigh)}`} />
      </Row>
    </Column>
  )
}

export const Daily = ({data}) => {
  return (
    <Column>
      <Row className="pb-4">
        {data.map((item, index) => {
          const text = index === 0 ? 'Today' : DateTime.fromSeconds(item.time).toFormat('ccc')
          return <Day key={item.time} text={text} {...item} />
        })}
      </Row>
    </Column>
  )
}
