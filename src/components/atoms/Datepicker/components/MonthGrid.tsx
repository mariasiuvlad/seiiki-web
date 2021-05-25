import cx from 'classnames'
import {take} from 'ramda'
import Day from './Day'
import {createDaysInMonth} from '../utils'
import {ParagraphPrimary} from 'components/atoms/Typography'
import {DatepickerComponentProps} from './types'
import style from '../Datepicker.module.css'

const MonthGrid: React.FC<DatepickerComponentProps> = ({date, onChange}) => {
  const days = createDaysInMonth(date)
  return (
    <div className={cx('grid', style.grid)}>
      {take(7)(days).map((d) => (
        <ParagraphPrimary
          key={d.weekday}
          className={cx(style.weekday, d.weekday >= 6 && style.weekend)}>
          {d.weekdayShort[0]}
        </ParagraphPrimary>
      ))}
      {days.map((d) => (
        <Day key={d.toString()} current={date} date={d} onClick={onChange} />
      ))}
    </div>
  )
}

export default MonthGrid
