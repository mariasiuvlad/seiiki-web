import React from 'react'
import cx from 'classnames'
import {useSelect, UseSelectProps, UseSelectStateChange} from 'downshift'

import {CaretDown} from 'icons'
import {Row} from 'components/atoms/Flex'
import Typography from 'components/atoms/Typography'

import style from './SensorSelector.module.css'

export interface SensorSelectorProps extends UseSelectProps<string> {
  className?: string
}
export type SensorSelectorStateChange = UseSelectStateChange<string>

const Option = ({item, index, isSelected, isHighlighted, getItemProps}) => {
  return (
    <li
      className={cx({[style.highlighted]: isHighlighted, hidden: isSelected}, 'cursor-pointer')}
      {...getItemProps({item, index})}>
      <Typography as="h1" className={cx(style.item, 'text-shadow')} text={item} />
    </li>
  )
}

const Selector: React.FC<SensorSelectorProps> = ({
  className,
  items,
  defaultSelectedItem,
  onSelectedItemChange
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
    <>
      <button className={className} {...getToggleButtonProps()}>
        <Row className="items-center">
          <Typography as="h1" className={cx(style.item, 'text-shadow')} text={selectedItem} />
          <CaretDown className="w-4 h-4 fill-current" />
        </Row>
      </button>
      <div className={cx(style.sensorSelector, {hidden: !isOpen})}>
        <ul {...getMenuProps()} className={cx('outline-none')}>
          {isOpen &&
            items.map((item, index) => (
              <Option
                key={`${item}${index}`}
                isHighlighted={index === highlightedIndex}
                isSelected={item === selectedItem}
                item={item}
                index={index}
                getItemProps={getItemProps}
              />
            ))}
        </ul>
      </div>
    </>
  )
}

const SensorSelector: React.FC<SensorSelectorProps> = (props) => {
  const {items, className} = props
  if (items.length <= 1) {
    return <Typography as="h1" className={cx(className, style.item)} text={items[0]} />
  }
  return <Selector {...props} />
}

export default SensorSelector
