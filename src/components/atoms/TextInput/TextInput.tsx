import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import cx from 'classnames'

import style from './TextInput.module.css'

export type TextInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const TextInput: React.FC<TextInputProps> = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({className, ...props}, ref) => (
    <input {...props} ref={ref} className={cx(style.textInput, className)} />
  )
)

export default TextInput
