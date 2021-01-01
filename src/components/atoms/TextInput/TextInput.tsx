import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import cx from 'classnames'

export interface TextInputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const TextInput: React.FC<TextInputProps> = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({className, ...props}, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        name="password"
        placeholder="password"
        className={cx(className, 'rounded-md border bg-transparent mb-4 p-2 focus:outline-none')}
      />
    )
  }
)

export default TextInput
