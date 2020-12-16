import {httpClient} from 'lib/api/heating'
import React, {useCallback, useEffect, useState} from 'react'
import HeatingAgentDisplay from './HeatingAgentDisplay'

export default function HeatingAgentDisplayContainer() {
  const [heating, setHeating] = useState(null)
  useEffect(() => {
    const loadHeatingStatus = async () => {
      const {data} = await httpClient('/api/heating')
      setHeating(data)
    }
    loadHeatingStatus()
  }, [])

  const handleToggle = useCallback(async () => {
    const uri = heating?.state ? '/api/heating/off' : '/api/heating/on'
    const {data} = await httpClient(uri)
    setHeating(data)
  }, [heating?.state])

  return <HeatingAgentDisplay heating={heating} onToggle={handleToggle} />
}
