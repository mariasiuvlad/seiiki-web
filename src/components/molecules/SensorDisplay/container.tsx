import React from 'react'
import useSWR from 'swr'
import SensorDisplay from './SensorDisplay'
import httpClient from 'lib/api'

export default function SensorDisplayContainer(props) {
  const {data} = useSWR('/api/sensor/current', httpClient, {suspense: true})
  return <SensorDisplay {...props} {...data} />
}
