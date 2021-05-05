import React from 'react'
import {DateTime} from 'luxon'
import {Column, Row} from 'components/atoms/Flex'
import Typography from 'components/atoms/Typography'
import {addIndex, always, equals, ifElse, map, pipe} from 'ramda'
import {mapProps, setKey} from 'lib/ramda'

export const Day = ({text, temperatureLow, temperatureHigh}) => {
  return (
    <Column className="mx-2 items-center">
      <Typography className="text-center text-sm uppercase text-gray-200">{text}</Typography>
      <Row className="items-center text-white">
        <Typography className="text-base font-light">{Math.round(temperatureLow)}</Typography>
        <Typography className="font-light text-gray-200 mx-1">/</Typography>
        <Typography className="text-base font-light">{Math.round(temperatureHigh)}</Typography>
      </Row>
    </Column>
  )
}

interface DailyData {
  time: number
  temperatureHigh: number
  temperatureLow: number
}
interface DailyProps {
  data: DailyData[]
}

export const Daily = ({data}: DailyProps) => (
  <Column>
    <Row className="pb-4">
      {addIndex<DailyData, unknown>(map)(
        pipe(
          (item: DailyData, idx) => ({
            ...item,
            text: ifElse(
              equals(0),
              always('Today'),
              always(DateTime.fromSeconds(item.time).toFormat('ccc'))
            )(idx)
          }),
          mapProps(setKey('time'))(Day)
        )
      )(data)}
    </Row>
  </Column>
)
