import ErrorBoundary from 'components/atoms/ErrorBoundary'
import React, {Suspense} from 'react'
import ScheduleContainer from './container'

const ErrorComponent = () => <h1>Something when wrong</h1>

export default function ReadingChart(props) {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ScheduleContainer {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}
