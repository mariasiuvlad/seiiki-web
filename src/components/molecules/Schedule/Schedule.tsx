import React, {useCallback, useState} from 'react'
import cx from 'classnames'

import Select from 'components/atoms/Select'

import style from './Schedule.module.css'
import {AddCircle, CloseCircle} from 'icons'
import {useForm} from 'react-hook-form'

const Commands = [
  {value: 'on', label: 'Heating On'},
  {value: 'off', label: 'Heating Off'}
]

function useAsyncAction(action) {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(null)

  const execute = useCallback(async (...args) => {
    try {
      setError(null)
      setPending(true)
      const res = await action(...args)
      setPending(false)
      return res
    } catch (error) {
      setError(error)
    }
  }, [])

  return {pending, error, execute}
}

const Schedule = ({className = '', data, onDelete, onCreate}) => {
  const {register, errors, handleSubmit} = useForm()
  const {pending, execute} = useAsyncAction(onCreate)
  return (
    <form onSubmit={handleSubmit(execute)}>
      <table className={cx(className, style.root)}>
        <thead>
          <tr className="uppercase text-xs text-left opacity-40">
            <th>Cron</th>
            <th>Command</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({uuid, cron, command}) => (
            <tr key={uuid}>
              <td className="text-left">{cron}</td>
              <td className={cx(style.command)}>
                {Commands.find((c) => c.value === command).label}
              </td>
              <td>
                <div className="flex flex-row">
                  <button
                    className="flex items-center justify-center h-full"
                    onClick={() => onDelete(uuid)}>
                    <CloseCircle className="text-red-500 w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              {!pending ? (
                <input
                  className={cx('focus:outline-none bg-transparent', {
                    'text-red-500 placeholder-red-500': errors.cron
                  })}
                  type="text"
                  placeholder="* * * * * *"
                  name="cron"
                  ref={register({required: true})}
                />
              ) : (
                <div className="animate-pulse h-4 bg-gray-900 opacity-30 rounded w-36" />
              )}
            </td>
            <td>
              {!pending ? (
                <Select
                  className="uppercase text-xs"
                  name="command"
                  options={Commands}
                  ref={register({required: true})}
                />
              ) : (
                <div className="animate-pulse h-4 bg-gray-900 opacity-30 rounded w-18" />
              )}
            </td>
            <td>
              {!pending ? (
                <div className="flex flex-row">
                  <button type="submit" className="mr-1">
                    <AddCircle className="text-green-500 w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="animate-pulse h-4 bg-gray-900 opacity-30 rounded w-8" />
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default Schedule
