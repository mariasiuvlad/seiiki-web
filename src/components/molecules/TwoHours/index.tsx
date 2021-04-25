import React from 'react'
import cx from 'classnames'
import useHeatingAgent from 'hooks/useHeatingAgent'

const TwoHours = ({className}) => {
  const {nHours} = useHeatingAgent()

  return (
    <>
      <button onClick={() => nHours(1)} className={cx(className, 'btn primary flex-1')}>
        1 hour
      </button>
      <button onClick={() => nHours(2)} className={cx(className, 'btn primary flex-1')}>
        2 hours
      </button>
    </>
  )
}

export default TwoHours
