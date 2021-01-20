import React from 'react'
import cx from 'classnames'
import {useSelect, UseSelectProps, UseSelectStateChange} from 'downshift'

import {CaretDown} from 'icons'
import {Row} from 'components/atoms/Flex'

import style from './PeriodSelector.module.css'

export interface IntervalOption {
  value: number
  label: string
}

export interface PeriodSelectorProps extends UseSelectProps<IntervalOption> {}
export interface PeriodSelectorStateChange extends UseSelectStateChange<IntervalOption> {}

const Option = ({item, index, isSelected, isHighlighted, getItemProps}) => (
  <li
    className={cx('cursor-pointer p-2', {
      hidden: isSelected,
      [style.highlighted]: isHighlighted
    })}
    {...getItemProps({item, index})}>
    {item.label}
  </li>
)

const PeriodSelector: React.FC<PeriodSelectorProps> = ({
  items,
  onSelectedItemChange,
  defaultSelectedItem
}) => {
  const {
    isOpen,
    selectedItem,
    highlightedIndex,
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  } = useSelect({
    items,
    defaultSelectedItem,
    onSelectedItemChange
  })
  return (
    <div>
      <button type="button" {...getToggleButtonProps()}>
        <Row className="items-center p-2">
          {selectedItem.label}
          <CaretDown className="ml-2 w-3 h-3 fill-current" />
        </Row>
      </button>
      <ul className={style.list} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <Option
              key={`${item}${index}`}
              item={item}
              index={index}
              isHighlighted={highlightedIndex === index}
              isSelected={selectedItem === item}
              getItemProps={getItemProps}
            />
          ))}
      </ul>
    </div>
  )
}

export default PeriodSelector
