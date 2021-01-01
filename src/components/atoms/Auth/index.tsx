import React, {useEffect, useRef, useState} from 'react'
import cx from 'classnames'
import {useForm} from 'react-hook-form'

import Card from 'components/atoms/Card'
import Button from 'components/atoms/Button'

export default function Auth({onSubmit}) {
  const [password, setPassword] = useState('')
  const {handleSubmit, register, errors} = useForm({reValidateMode: 'onSubmit'})

  const pwdRef = useRef(null)
  useEffect(() => pwdRef.current.focus(), [])

  return (
    <div className="fullscreen flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            autoFocus
            ref={(e) => {
              register(e, {validate: (v) => v === process.env.NEXT_PUBLIC_NAIVE_AUTH_PASSWORD})
              pwdRef.current = e
            }}
            name="password"
            placeholder="password"
            className={cx('border bg-transparent mb-4 p-2 focus:outline-none', {
              'border-red-500': errors.password
              // 'border': !errors.password
            })}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full" primary type="submit" label="Login" />
        </div>
      </form>
    </div>
  )
}
