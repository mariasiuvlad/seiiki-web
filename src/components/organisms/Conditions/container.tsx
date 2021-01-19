import React from 'react'
import useSWR from 'swr'

import httpClient from 'lib/api'

import Conditions from './Conditions'

const ConditionsContainer = (props) => {
  const {data} = useSWR('/api/sensor/list', httpClient, {suspense: true})
  return <Conditions sensors={data} {...props} />
}

export default ConditionsContainer
