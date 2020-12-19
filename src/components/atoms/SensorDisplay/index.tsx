import React, {Suspense} from 'react'
import SensorDisplayContainer from './container'
import SensorDisplayFallback from './Fallback'

export default function SensorDisplay() {
  return (
    <Suspense fallback={<SensorDisplayFallback />}>
      <SensorDisplayContainer />
    </Suspense>
  )
}
