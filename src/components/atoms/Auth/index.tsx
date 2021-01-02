import React, {useEffect, useRef, useState} from 'react'
import cx from 'classnames'
import {useForm} from 'react-hook-form'

import Button from 'components/atoms/Button'
import TextInput from 'components/atoms/TextInput'

export default function Auth({onSubmit}) {
  const [password, setPassword] = useState('')
  const {handleSubmit, register, errors} = useForm({reValidateMode: 'onSubmit'})

  const pwdRef = useRef(null)
  useEffect(() => pwdRef?.current.focus(), [])

  return (
    <div className="fullscreen flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextInput
            autoFocus
            ref={(e) => {
              register(e, {validate: (v) => v === process.env.NEXT_PUBLIC_NAIVE_AUTH_PASSWORD})
              pwdRef.current = e
            }}
            name="password"
            placeholder="password"
            className={cx({'border-red-500': errors.password})}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="w-full text-xs uppercase tracking-wider"
            primary
            type="submit"
            label="Login"
          />
        </div>
      </form>
    </div>
  )
}
