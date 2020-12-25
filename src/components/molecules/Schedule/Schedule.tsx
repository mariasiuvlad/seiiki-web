import React, {Suspense} from 'react'
import cx from 'classnames'

import ErrorBoundary from 'components/atoms/ErrorBoundary'
import Select from 'components/atoms/Select'

import style from './Schedule.module.css'
import {AddCircle, CloseCircle} from 'icons'

const Commands = [
  {value: 'on', label: 'Heating On'},
  {value: 'off', label: 'Heating Off'}
]

const Schedule = ({className = '', data, onDelete, onCreate}) => {
  return (
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
            <td>{cron}</td>
            <td className={cx(style.command)}>{Commands.find((c) => c.value === command).label}</td>
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
            <input
              className="focus:outline-none bg-transparent"
              type="text"
              placeholder="* * * * * *"
            />
          </td>
          <td>
            <Select className="uppercase text-xs" options={Commands} />
          </td>
          <td>
            <div
              className="flex flex-row"
              onClick={() =>
                onCreate({
                  command: 'on',
                  cron: '* * * * * *'
                })
              }>
              <button className="mr-1">
                <AddCircle className="text-green-500 w-5 h-5" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default function ScheduleBounded(props) {
  return (
    <ErrorBoundary fallback={() => <h1>Something when wrong?</h1>}>
      <Suspense fallback={() => <h1>Loading</h1>}>
        <Schedule {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}
