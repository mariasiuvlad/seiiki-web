import React from 'react'
import useSWR from 'swr'
import httpClient from 'lib/api'
import ReadingChart from './ReadingChart'

export default function ReadingChartContainer(props) {
  const {data} = useSWR('/api/sensor/chart', httpClient, {suspense: true})
  return <ReadingChart {...props} data={data} />
}
