import React, {Suspense} from 'react'
import ErrorBoundary from '../ErrorBoundary'
import ReadingChartContainer from './container'
import ReadingChartFallback, {ReadingChartError} from './Fallback'

export default function ReadingChart(props) {
  return (
    <ErrorBoundary fallback={<ReadingChartError {...props} />}>
      <Suspense fallback={<ReadingChartFallback {...props} />}>
        <ReadingChartContainer {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}
