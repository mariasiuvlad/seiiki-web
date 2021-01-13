import React, {Suspense} from 'react'
import SensorDisplayContainer from './container'
import SensorDisplayFallback from './Fallback'
import ErrorBoundary from '../ErrorBoundary'

const ErrorComponent = () => (
  <h1 className="self-center text-center flex-1 px-4">Sensor unreachable</h1>
)

export default function SensorDisplay(props) {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <Suspense fallback={<SensorDisplayFallback {...props} />}>
        <SensorDisplayContainer {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}
