import React, {Suspense} from 'react'
import SensorDisplayContainer from './container'
import SensorDisplayFallback from './Fallback'

export default function SensorDisplay(props) {
  return (
    <Suspense fallback={<SensorDisplayFallback {...props} />}>
      <SensorDisplayContainer {...props} />
    </Suspense>
  )
}
