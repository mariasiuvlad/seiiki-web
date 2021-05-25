import React from 'react'
import cx from 'classnames'
import useHeatingAgent from 'hooks/useHeatingAgent'
import {Row} from 'components/atoms/Flex'
import Button from 'components/atoms/Button'

const TwoHours = ({className = ''}) => {
  const {nHours} = useHeatingAgent()

  return (
    <Row className={cx(className, 'gap-2 items-center')}>
      <Button className="flex-grow" variant="primary" label="1 hour" onClick={() => nHours(1)} />
      <Button className="flex-grow" variant="primary" label="2 hours" onClick={() => nHours(2)} />
    </Row>
  )
}

export default TwoHours
