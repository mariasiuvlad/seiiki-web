import httpClient from 'lib/api'
import {useState, useCallback} from 'react'
import useSWR from 'swr'

import {PeriodSelectorStateChange} from 'components/organisms/Conditions/PeriodSelector'
import {SensorSelectorStateChange} from 'components/organisms/Conditions/SensorSelector'

const periods = [
  {value: 12, label: 'last 12 hours'},
  {value: 24, label: 'last 24 hours'},
  {value: 48, label: 'last 48 hours'}
]

const useConditions = () => {
  const {data: sensors} = useSWR('/api/sensor/list', httpClient, {suspense: true})

  const [period, setPeriod] = useState(periods[0])
  const [sensor, setSensor] = useState(sensors[0])

  const onSensorChange: (changes: SensorSelectorStateChange) => void = useCallback(
    ({selectedItem}) => setSensor(selectedItem),
    []
  )

  const onPeriodChange: (changes: PeriodSelectorStateChange) => void = useCallback(
    ({selectedItem}) => setPeriod(selectedItem),
    []
  )

  return {
    period,
    sensor,
    sensors,
    onSensorChange,
    onPeriodChange
  }
}

export default useConditions
