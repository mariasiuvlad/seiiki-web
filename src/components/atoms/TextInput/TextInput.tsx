import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import cx from 'classnames'

export type TextInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const TextInput: React.FC<TextInputProps> = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({className, ...props}, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={cx('rounded-sm border bg-transparent px-2 py-1 focus:outline-none', className)}
      />
    )
  }
)

export default TextInput
