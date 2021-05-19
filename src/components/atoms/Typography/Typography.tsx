import React, {FC, PropsWithChildren} from 'react'
import cx from 'classnames'

export interface TypographyProps {
  /**
   * HTML Tag to render as
   */
  as?: string
  /**
   * Custom className
   */
  className?: string
  /**
   * Light font
   */
  light?: boolean
}

const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  as = 'p',
  className = '',
  light = false
}) => {
  const CustomTag = as as keyof JSX.IntrinsicElements

  return (
    <CustomTag className={cx(className, {'font-light': light, 'font-normal': !light})}>
      {children}
    </CustomTag>
  )
}

export const TitlePrimary: FC<PropsWithChildren<TypographyProps>> = ({className = '', ...args}) => (
  <Typography className={cx(className, 'text-2xl')} {...args} />
)

export const TitleSecondary: FC<PropsWithChildren<TypographyProps>> = ({className, ...args}) => (
  <Typography className={cx(className, 'text-xl')} {...args} />
)

export const ParagraphPrimary: FC<PropsWithChildren<TypographyProps>> = ({className, ...args}) => (
  <Typography className={cx(className, 'text-base')} {...args} />
)

export const ParagraphSecondary: FC<PropsWithChildren<TypographyProps>> = ({
  className,
  ...args
}) => <Typography className={cx(className, 'text-sm')} {...args} />

export const ParagraphTertiary: FC<PropsWithChildren<TypographyProps>> = ({className, ...args}) => (
  <Typography className={cx(className, 'text-xs')} {...args} />
)

export default Typography
