import cx from 'classnames'
import {Column, Row} from 'components/atoms/Flex'
import {DateTime} from 'luxon'
import style from './Datepicker.module.css'
import {Header, Time, Month} from './components'

export type DatepickerProps = {
  date: DateTime
  hasTime?: boolean
  onChange?: React.Dispatch<React.SetStateAction<DateTime>>
  options?: unknown
}

const Datepicker: React.FC<DatepickerProps & {className?: string}> = ({
  className,
  hasTime,
  date,
  onChange = () => null
}) => {
  return (
    <Row className={cx(style.root, className)}>
      <Row>
        <Column className="flex-grow">
          <Header date={date} onChange={onChange} />
          <Month date={date} onChange={onChange} />
        </Column>
        {hasTime && <Time date={date} onChange={onChange} />}
      </Row>
    </Row>
  )
}

export default Datepicker
