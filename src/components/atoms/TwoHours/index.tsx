import cx from 'classnames'
import useHeatingAgent from 'hooks/useHeatingAgent'

const TwoHours = ({className}) => {
  const {twoHours} = useHeatingAgent()

  return (
    <button onClick={twoHours} className={cx(className, 'btn primary')}>
      Two hours
    </button>
  )
}

export default TwoHours
