import React from 'react'
import cx from 'classnames'
import {Row} from '../Flex'
import {useSelect, UseSelectProps} from 'downshift'
import Button from '../Button'
import style from './Select.module.css'
import {IconType} from '../Icon/Icon'

export type SelectOption<T> = {label: string; value: T}
export type SelectProps = {
  className?: string
  containerClassName?: string
  placeholder?: string
  icon?: IconType
} & UseSelectProps<SelectOption<unknown>>

const Select: React.FC<SelectProps> = ({
  className,
  containerClassName,
  items,
  defaultSelectedItem,
  placeholder = '',
  icon = 'ChevronDownIcon',
  onSelectedItemChange
}) => {
  const select = useSelect<typeof items[0]>({
    items,
    defaultSelectedItem,
    onSelectedItemChange
  })

  return (
    <Row className={cx('relative', containerClassName)}>
      <Button
        className={(style.option, className)}
        icon={icon}
        label={select.selectedItem?.label ?? placeholder}
        {...select.getToggleButtonProps()}
      />
      <ul className={cx(select.isOpen && style.list)} {...select.getMenuProps()}>
        {select.isOpen &&
          items.map((item, index) => (
            <li key={item.label}>
              <Button
                label={item?.label}
                className={cx(
                  style.option,
                  'w-full rounded-none',
                  select.selectedItem === item && style.selected,
                  select.highlightedIndex === index && style.highlighted
                )}
                {...select.getItemProps({item, index})}
              />
            </li>
          ))}
      </ul>
    </Row>
  )
}

export default Select
