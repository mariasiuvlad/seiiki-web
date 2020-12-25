import React, {useCallback} from 'react'
import useSWR from 'swr'

import httpClient from 'lib/api'

import Schedule from './Schedule'

const deleteTask = (uuid) => httpClient(`/api/schedule/${uuid}`, {method: 'DELETE'})
const createTask = (data) => httpClient('/api/schedule', {data, method: 'POST'})

const ScheduleContainer = (props) => {
  const {data, revalidate} = useSWR('/api/schedule', httpClient, {suspense: true})

  const onDelete = useCallback(async (uuid) => {
    await deleteTask(uuid)
    revalidate()
  }, [])

  const onCreate = useCallback(async (data) => {
    await createTask(data)
    revalidate()
  }, [])

  return <Schedule data={data} onCreate={onCreate} onDelete={onDelete} {...props} />
}

export default ScheduleContainer
