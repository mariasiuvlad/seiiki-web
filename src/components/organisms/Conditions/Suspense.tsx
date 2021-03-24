import React, {Suspense} from 'react'

import Conditions from './Conditions'

import ErrorBoundary from 'components/atoms/ErrorBoundary'
import {DefaultError} from 'components/atoms/DefaultSuspense'
import {Fallback} from './Fallback'

export default function ConditionsContainer(props) {
  return (
    <ErrorBoundary key={props.interval} fallback={<DefaultError {...props} />}>
      <Suspense fallback={<Fallback {...props} />}>
        <Conditions {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}
