import React, {useState, useEffect, useCallback} from 'react'
import {httpClient} from 'lib/api/heating'

export default function HeatingAgentDisplay() {
  const [heating, setHeating] = useState(null)
  useEffect(() => {
    const loadHeatingStatus = async () => {
      const {data} = await httpClient('/api/heating')
      setHeating(data)
    }
    loadHeatingStatus()
  }, [])

  const onToggle = useCallback(async () => {
    const uri = heating?.state ? '/api/heating/off' : '/api/heating/on'
    const {data} = await httpClient(uri)
    setHeating(data)
  }, [])

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl tracking-tight font-sans p-4">
        Heating is {heating?.state ? 'On' : 'Off'} at this time
      </h1>
      <button
        className="py-2 px-4 bg-blue-400 text-white border-b-4 border-blue-600"
        onClick={onToggle}>
        Turn {heating?.state ? 'Off' : 'On'}
      </button>
    </div>
  )
}
