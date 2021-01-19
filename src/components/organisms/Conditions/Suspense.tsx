import React, {Suspense} from 'react'

import Container from './container'

import ErrorBoundary from 'components/atoms/ErrorBoundary'
import {DefaultError} from 'components/atoms/DefaultSuspense'
import {Fallback} from './Fallback'

export default function Conditions(props) {
  return (
    <ErrorBoundary key={props.interval} fallback={<DefaultError {...props} />}>
      <Suspense fallback={<Fallback {...props} />}>
        <Container {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}
