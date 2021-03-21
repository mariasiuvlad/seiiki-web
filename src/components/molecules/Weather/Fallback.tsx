import {Column} from 'components/atoms/Flex'
import cx from 'classnames'

const WeatherFallback: React.FC<{className?: string}> = ({className}) => (
  <Column className={cx(className, 'flex-grow p-4 overflow-auto')}>
    <div className="h-9 bg-gray-900 dark:bg-white opacity-30 rounded w-full" />
  </Column>
)

export default WeatherFallback
