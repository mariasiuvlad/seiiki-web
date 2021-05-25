import Datepicker from 'components/atoms/Datepicker'
import {Row} from 'components/atoms/Flex'
import {DateTime} from 'luxon'
import {useState} from 'react'

const Dashboard = () => {
  const [date, setDate] = useState(DateTime.now())
  return (
    <Row className="bg-green-300 flex-grow h-full">
      <Datepicker className="w-full" date={date} onChange={setDate} />
    </Row>
  )
}

export default Dashboard
