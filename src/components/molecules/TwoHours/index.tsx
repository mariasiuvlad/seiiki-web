import React from 'react'
import cx from 'classnames'
import useHeatingAgent from 'hooks/useHeatingAgent'
import {Row} from 'components/atoms/Flex'

const TwoHours = ({className = ''}) => {
  const {nHours} = useHeatingAgent()

  return (
    <Row className="gap-2">
      <button onClick={() => nHours(1)} className={cx(className, 'btn btn-primary flex-1')}>
        1 hour
      </button>
      <button onClick={() => nHours(2)} className={cx(className, 'btn btn-primary flex-1')}>
        2 hours
      </button>
    </Row>
  )
}

export default TwoHours
