import React from 'react'
import cx from 'classnames'
import Weather from './Weather'
import ErrorBoundary from '../../atoms/ErrorBoundary'
import {Column} from 'components/atoms/Flex'

const ErrorComponent = ({className}) => (
  <Column className={cx(className, 'p-4 overflow-auto')}>
    <h1 className="self-center text-center flex-1 px-4 font-light">Failed to load weather</h1>
  </Column>
)

export default function WeatherContainer(props) {
  return (
    <ErrorBoundary fallback={<ErrorComponent {...props} />}>
      <Weather {...props} />
    </ErrorBoundary>
  )
}
