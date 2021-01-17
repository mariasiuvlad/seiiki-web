import React, {useMemo} from 'react'
import useSWR from 'swr'

import httpClient from 'lib/api'

import ConditionsCard from './ConditionsCard'

const ConditionsCardContainer = (props) => {
  const {data: sensors} = useSWR('/api/sensor/list', httpClient, {suspense: true})
  const sensorOptions = useMemo(() => sensors.map((s) => ({value: s, label: s})), [sensors])

  return <ConditionsCard sensors={sensorOptions} {...props} />
}

export default ConditionsCardContainer
