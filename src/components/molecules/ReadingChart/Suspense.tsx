import React, {Suspense} from 'react'
import ErrorBoundary from '../../atoms/ErrorBoundary'
import ReadingChartContainer from './container'
import ReadingChartFallback, {ReadingChartError} from './Fallback'

export default function ReadingChart(props) {
  return (
    <ErrorBoundary key={props.interval} fallback={<ReadingChartError {...props} />}>
      <Suspense fallback={<ReadingChartFallback {...props} />}>
        <ReadingChartContainer {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}
