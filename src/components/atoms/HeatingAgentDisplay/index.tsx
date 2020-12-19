import React, {Suspense} from 'react'
import ErrorBoundary from '../ErrorBoundary'
import HeatingAgentDisplayContainer from './container'
import HeatingAgentDisplayFallback from './Fallback'

export default function HeatingAgentDisplay() {
  return (
    <ErrorBoundary message={'Heating agent unreachable'}>
      <Suspense fallback={<HeatingAgentDisplayFallback />}>
        <HeatingAgentDisplayContainer />
      </Suspense>
    </ErrorBoundary>
  )
}
