import React from 'react'
import cx from 'classnames'
import {useForm} from 'react-hook-form'

import TextInput from 'components/atoms/TextInput'
import {Column} from '../Flex'

export default function Auth({onSubmit}) {
  const {handleSubmit, register, errors} = useForm({reValidateMode: 'onSubmit'})

  return (
    <Column className={cx('p-8 items-center flex-grow')}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Column className="card px-8 pb-8 pt-4">
          <h1 className="font-thin text-2xl pb-4">Login</h1>
          <TextInput
            name="username"
            placeholder="username"
            className={cx('mb-4', {'border-red-500': errors.password})}
            type="text"
            ref={register}
          />
          <TextInput
            name="password"
            placeholder="password"
            className={cx('mb-4', {'border-red-500': errors.password})}
            type="password"
            ref={register}
          />
          <button className="btn primary" type="submit">
            submit
          </button>
        </Column>
      </form>
    </Column>
  )
}
