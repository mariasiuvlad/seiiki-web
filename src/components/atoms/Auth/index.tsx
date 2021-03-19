import React from 'react'
import cx from 'classnames'
import {useForm} from 'react-hook-form'

import Button from 'components/atoms/Button'
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
          <Button
            className="w-full text-xs uppercase tracking-wider"
            primary
            type="submit"
            label="Login"
          />
        </Column>
      </form>
    </Column>
  )
}
