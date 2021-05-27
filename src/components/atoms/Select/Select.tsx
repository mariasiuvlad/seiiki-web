import React, {useState} from 'react'
import cx from 'classnames'
import {useSelect, UseSelectProps} from 'downshift'
import Button from '../Button'
import style from './Select.module.css'
import {IconType} from '../Icon/Icon'
import {usePopper} from 'react-popper'

export type SelectOption<T> = {label: string; value: T}

export type OptionProps = {
  item: SelectOption<unknown>
  index: number
  isSelected: boolean
  isHighlighted: boolean
  getItemProps: any
}

export type SelectProps = {
  className?: string
  containerClassName?: string
  placeholder?: string
  icon?: IconType
  option?: React.FC<OptionProps>
} & UseSelectProps<SelectOption<unknown>>

const Select: React.FC<SelectProps> = ({
  className,
  containerClassName,
  items,
  defaultSelectedItem,
  placeholder = '',
  icon = 'ChevronDownIcon',
  option: Option = ({item, index, isSelected, isHighlighted, getItemProps}) => (
    <Button
      label={item?.label}
      className={cx(
        style.option,
        'w-full rounded-none',
        isSelected && style.selected,
        isHighlighted && style.highlighted
      )}
      {...getItemProps({item, index})}
    />
  ),
  onSelectedItemChange
}) => {
  const select = useSelect<typeof items[0]>({
    items,
    defaultSelectedItem,
    onSelectedItemChange
  })

  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  // const [isOpen, setOpen] = useState(false)
  const {styles, attributes} = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8]
        }
      }
    ]
  })

  return (
    <>
      <span className={containerClassName} ref={setReferenceElement}>
        <Button
          className={(style.option, className)}
          icon={icon}
          label={select.selectedItem?.label ?? placeholder}
          {...select.getToggleButtonProps()}
        />
      </span>
      {select.isOpen && (
        <div
          className={cx(style.list)}
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}>
          <ul {...select.getMenuProps({}, {suppressRefError: true})}>
            {items.map((item, index) => (
              <li key={item.label}>
                <Option
                  item={item}
                  index={index}
                  isSelected={select.selectedItem.value === item.value}
                  isHighlighted={select.highlightedIndex === index}
                  getItemProps={select.getItemProps}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className={cx(style.list, !select.isOpen && 'hidden')}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}>
        <ul {...select.getMenuProps()}>
          {items.map((item, index) => (
            <li key={item.label}>
              <Option
                item={item}
                index={index}
                isSelected={select.selectedItem.value === item.value}
                isHighlighted={select.highlightedIndex === index}
                getItemProps={select.getItemProps}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Select
