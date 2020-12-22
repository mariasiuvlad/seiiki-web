import React, {Suspense} from 'react'
import ErrorBoundary from '../ErrorBoundary'
import HeatingAgentDisplayContainer from './container'
import HeatingAgentDisplayFallback from './Fallback'

export default function HeatingAgentDisplay(props) {
  const ErrorComponent = () => (
    <h1 className="self-center text-center flex-grow">Heating agent unreachable</h1>
  )

  return (
    <ErrorBoundary fallback={ErrorComponent}>
      <Suspense fallback={<HeatingAgentDisplayFallback {...props} />}>
        <HeatingAgentDisplayContainer {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}
