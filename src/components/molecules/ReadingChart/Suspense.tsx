import React from 'react'
import ErrorBoundary from '../../atoms/ErrorBoundary'
import ReadingChartContainer from './container'
import {ReadingChartError} from './Fallback'

export default function ReadingChart(props) {
  return (
    <ErrorBoundary
      key={`${props.interval}${props.sensor}`}
      fallback={<ReadingChartError {...props} />}>
      <ReadingChartContainer {...props} />
    </ErrorBoundary>
  )
}
