import React, {Suspense} from 'react'
import {DefaultError} from '../../atoms/DefaultSuspense'
import ErrorBoundary from '../../atoms/ErrorBoundary'
import HeatingSwitch from './HeatingSwitch'

const loadingHeatingAgent = () => ({
  isOn: undefined,
  onToggle: () => null,
  twoHours: () => null
})

const Fallback = (props) => {
  return <HeatingSwitch {...props} useHeatingHook={loadingHeatingAgent} />
}

export default function HeatingSwitchContainer(props) {
  return (
    <ErrorBoundary key={props.interval} fallback={<DefaultError {...props} />}>
      <Suspense fallback={<Fallback {...props} />}>
        <HeatingSwitch {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}
