import React from 'react'
import Container from './container'
import ErrorBoundary from '../../atoms/ErrorBoundary'

const ErrorComponent = () => (
  <h1 className="self-center text-center flex-1 px-4">Something went wrong</h1>
)

export default function SensorDisplay(props) {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <Container {...props} />
    </ErrorBoundary>
  )
}
