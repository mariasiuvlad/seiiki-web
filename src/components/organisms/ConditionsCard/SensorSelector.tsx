import React from 'react'
import cx from 'classnames'
import {CaretDown} from 'icons'
import {Row} from 'components/atoms/Flex'
import Typography from 'components/atoms/Typography'

import style from './ConditionsCard.module.css'

const SensorSelector = ({
  sensors,
  isOpen,
  selectedItem,
  highlightedIndex,
  getToggleButtonProps,
  getMenuProps,
  getItemProps
}) => (
  <>
    <button {...getToggleButtonProps()}>
      <Row className="items-center">
        <Typography
          as="h1"
          className="capitalize font-extralight text-4xl text-left text-shadow p-4"
          text={selectedItem}
        />
        <CaretDown className="w-4 h-4 fill-current" />
      </Row>
    </button>
    <div className={cx(style.sensorSelector, {hidden: !isOpen})}>
      <ul {...getMenuProps()} className={cx('outline-none')}>
        {isOpen &&
          sensors.map((item, index) => (
            <li
              className={cx(
                {
                  'bg-gray-800 text-white dark:bg-gray-700': highlightedIndex === index,
                  'bg-gray-600 text-white dark:bg-gray-500': selectedItem === item
                },
                'cursor-pointer'
              )}
              key={`${item}${index}`}
              {...getItemProps({item, index})}>
              <Typography
                as="h1"
                className="capitalize font-extralight text-4xl text-left text-shadow p-4"
                text={item}
              />
            </li>
          ))}
      </ul>
    </div>
  </>
)

export default SensorSelector
