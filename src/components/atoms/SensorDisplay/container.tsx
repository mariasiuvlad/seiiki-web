import React, {Suspense} from 'react'
import useSWR from 'swr'
import SensorDisplay from './SensorDisplay'
import httpClient from 'lib/api'

export default function SensorDisplayContainer() {
  const {data} = useSWR('/api/sensor/current', httpClient, {suspense: true})
  return <SensorDisplay data={data} />
}
