import React from 'react'
import cx from 'classnames'
import {useForm} from 'react-hook-form'

import TextInput from 'components/atoms/TextInput'
import {Column} from '../Flex'

export default function Auth({onSubmit}) {
  const {handleSubmit, register, errors} = useForm({reValidateMode: 'onSubmit'})

  return (
    <Column className="fullscreen justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <TextInput
            name="password"
            placeholder="password"
            className={cx('mb-4', {'border-red-500': errors.password})}
            type="password"
            ref={register({validate: (v) => v === process.env.NEXT_PUBLIC_NAIVE_AUTH_PASSWORD})}
          />
          <button className="btn primary" type="submit">
            Login
          </button>
        </Column>
      </form>
    </Column>
  )
}
