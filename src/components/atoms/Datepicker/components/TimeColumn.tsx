import {DateTime} from 'luxon'
import cx from 'classnames'
import {createTimesInDay} from '../utils'
import {Column} from 'components/atoms/Flex'
import {ParagraphTertiary} from 'components/atoms/Typography'
import {DatepickerComponentProps} from './types'

const TimeColumn: React.FC<DatepickerComponentProps> = ({date, onChange}) => {
  const times = createTimesInDay(date)
  return (
    <Column className="w-18 h-96 bg-gray-200 dark:bg-gray-800 overflow-y-auto">
      {times.map((d) => (
        <button onClick={() => onChange(d)}>
          <ParagraphTertiary
            className={cx(
              'font-semibold text-gray-500 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-900 p-2',
              date.hour === d.hour && date.minute === d.minute && 'text-blue-400 dark:text-blue-500'
            )}>
            {d.toLocaleString(DateTime.TIME_SIMPLE)}
          </ParagraphTertiary>
        </button>
      ))}
    </Column>
  )
}

export default TimeColumn
