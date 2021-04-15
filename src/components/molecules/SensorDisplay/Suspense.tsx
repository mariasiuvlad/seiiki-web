import React, {Suspense} from 'react'
import Component from './SensorDisplay'
import SensorDisplayFallback from './Fallback'
import ErrorBoundary from '../../atoms/ErrorBoundary'

const ErrorComponent = () => (
  <h1 className="self-center text-center flex-1 px-4">Sensor unreachable</h1>
)

export default function SensorDisplay(props) {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <Suspense fallback={<SensorDisplayFallback {...props} />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}
