import React from 'react'
import useSWR from 'swr'
import httpClient from 'lib/api'
import ReadingChart from './ReadingChart'

export default function ReadingChartContainer({interval, ...rest}) {
  const {data} = useSWR(`/api/sensor/chart?interval=${interval}`, httpClient, {
    suspense: true
  })
  return <ReadingChart {...rest} data={data} />
}
