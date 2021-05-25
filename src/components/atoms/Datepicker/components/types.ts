import {DateTime} from 'luxon'

export type DatepickerComponentProps = {
  date: DateTime
  onChange: React.Dispatch<React.SetStateAction<DateTime>>
}
