import React from 'react'
import useSWR from 'swr'
import SensorDisplay from './SensorDisplay'
import httpClient from 'lib/api'

export default function SensorDisplayContainer({sensor, ...props}) {
  const {data} = useSWR(`/api/sensor/current?sensor=${sensor}`, httpClient, {suspense: true})

  return <SensorDisplay {...props} {...data} />
}
