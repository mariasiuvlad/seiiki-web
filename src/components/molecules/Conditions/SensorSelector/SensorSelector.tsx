import React from 'react'
import cx from 'classnames'
import {addIndex, always, cond, equals, lt, map, propSatisfies} from 'ramda'
import {useSelect, UseSelectProps, UseSelectStateChange} from 'downshift'

import {CaretDown} from 'icons'
import {Column, Row} from 'components/atoms/Flex'
import {TitlePrimary} from 'components/atoms/Typography'

import style from './SensorSelector.module.css'

export interface SensorSelectorProps extends UseSelectProps<string> {
  className?: string
}
export type SensorSelectorStateChange = UseSelectStateChange<string>

const Option = ({item}) => {
  return (
    <TitlePrimary as="h1" className={cx(style.item)}>
      {item}
    </TitlePrimary>
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

  const itemGenerator = (item, index) => (
    <li
      key={`${item}${index}`}
      className={cx(
        className,
        {
          [style.highlighted]: index === highlightedIndex
          // hidden: item === selectedItem
        },
        'cursor-pointer'
      )}
      {...getItemProps({item, index})}>
      <Option item={item} />
    </li>
  )

  return (
    <>
      <button className={className} {...getToggleButtonProps()}>
        <Row className="items-center">
          <Option item={selectedItem} />
          <CaretDown className="w-3 h-3 fill-current" />
        </Row>
      </button>
      <Column className={cx(style.sensorSelector, {hidden: !isOpen})}>
        <ul {...getMenuProps()} className={cx('outline-none bg-gray-50 flex-grow')}>
          {isOpen && addIndex(map)(itemGenerator)(items)}
        </ul>
      </Column>
    </>
  )
}

const SensorSelector: React.FC<SensorSelectorProps> = (props) => {
  const {items} = props

  return cond([
    [propSatisfies(equals(1), 'length'), always(<Option item={items[0]} />)],
    [propSatisfies(lt(1), 'length'), always(<Selector {...props} />)]
  ])(items)
}

export default SensorSelector
