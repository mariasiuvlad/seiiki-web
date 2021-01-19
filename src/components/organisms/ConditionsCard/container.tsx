import React from 'react'
import useSWR from 'swr'

import httpClient from 'lib/api'

import ConditionsCard from './ConditionsCard'

const ConditionsCardContainer = (props) => {
  const {data} = useSWR('/api/sensor/list', httpClient, {suspense: true})
  return <ConditionsCard sensors={data} {...props} />
}

export default ConditionsCardContainer
