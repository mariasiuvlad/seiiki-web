import React from 'react'
import ErrorBoundary from '../../atoms/ErrorBoundary'
import HeatingAgentDisplayContainer from './container'

const ErrorComponent = () => (
  <h1 className="self-center text-center flex-grow px-4">Heating agent unreachable</h1>
)

export default function HeatingAgentDisplay(props) {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <HeatingAgentDisplayContainer {...props} />
    </ErrorBoundary>
  )
}
