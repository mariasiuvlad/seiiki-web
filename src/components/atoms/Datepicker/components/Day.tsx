import React from 'react'
import cx from 'classnames'
import {DateTime} from 'luxon'
import {ParagraphSecondary} from 'components/atoms/Typography'
import style from '../Datepicker.module.css'

type DayProps = {
  date: DateTime
  current?: DateTime
  onClick(date: DateTime): void
  className?: string
}

const Day: React.FC<DayProps> = ({className, current, date, onClick}) => {
  return (
    <button
      className={cx(
        'flex flex-row items-center justify-center',
        style.day,
        current.month === date.month && current.day === date.day && style.selected,
        current.month === date.month && style.current,
        className
      )}
      onClick={() => onClick(date)}>
      <ParagraphSecondary className="font-semibold">{date.day}</ParagraphSecondary>
    </button>
  )
}

export default Day
