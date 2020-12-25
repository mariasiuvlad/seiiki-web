import ErrorBoundary from 'components/atoms/ErrorBoundary'
import React, {Suspense} from 'react'
import ScheduleContainer from './container'

export default function ReadingChart(props) {
  return (
    <ErrorBoundary fallback={() => <h1>Something when wrong</h1>}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ScheduleContainer {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}
