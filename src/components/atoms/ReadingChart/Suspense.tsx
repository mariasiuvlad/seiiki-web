import React, {Suspense} from 'react'
import ReadingChartContainer from './container'
import ReadingChartFallback from './Fallback'

export default function ReadingChart(props) {
  return (
    <Suspense fallback={<ReadingChartFallback {...props} />}>
      <ReadingChartContainer {...props} />
    </Suspense>
  )
}
