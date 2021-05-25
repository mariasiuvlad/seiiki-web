import {DateTime} from 'luxon'
import cx from 'classnames'
import Button from 'components/atoms/Button'
import {Row} from 'components/atoms/Flex'
import {TitleSecondary} from 'components/atoms/Typography'
import {nextMonth, prevMonth} from '../utils'
import style from '../Datepicker.module.css'
import {DatepickerComponentProps} from './types'

const Header: React.FC<DatepickerComponentProps> = ({date, onChange}) => {
  return (
    <Row className={cx(style.header)}>
      <Button
        label="Today"
        className={cx(
          style.headerButton,
          date.startOf('day').equals(DateTime.now().startOf('day')) &&
            'text-blue-500 dark:text-blue-300'
        )}
        onClick={() => onChange(DateTime.now())}
      />
      <Button
        icon="ChevronLeftIcon"
        onClick={() => onChange(prevMonth)}
        className={style.headerButton}
      />
      <Button
        icon="ChevronRightIcon"
        onClick={() => onChange(nextMonth)}
        className={style.headerButton}
      />
      <Row className={cx(style.month)}>
        <TitleSecondary className="text-gray-600 dark:text-gray-200 font-bold">
          {date.monthShort}
        </TitleSecondary>
        <TitleSecondary className="text-blue-500 dark:text-blue-400 font-semibold">
          {date.year}
        </TitleSecondary>
      </Row>
    </Row>
  )
}

export default Header
