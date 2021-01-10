import React, {FC} from 'react'
import cx from 'classnames'

export interface TypographyProps {
  text: string
  /**
   * HTML Tag to render as
   */
  as?: string
  /**
   * Custom className
   */
  className?: string
  /**
   * Use rounded font variant
   */
  rounded?: boolean
}

const Typography: FC<TypographyProps> = ({as = 'p', className = '', rounded = false, text}) => {
  const CustomTag = as as keyof JSX.IntrinsicElements

  return (
    <CustomTag
      className={cx(className, {
        rounded
      })}>
      {text}
    </CustomTag>
  )
}

export default Typography
