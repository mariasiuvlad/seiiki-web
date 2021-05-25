import React from 'react'
import {Portal} from 'react-portal'
import Button from 'components/atoms/Button'
import {Column} from 'components/atoms/Flex'
import ScheduleEventForm from 'components/forms/ScheduleEventForm'

const Backdrop = ({children}) => {
  return (
    <Column className="absolute top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-90">
      {children}
    </Column>
  )
}

const Modal = ({onClose}) => {
  return (
    <Portal>
      <Backdrop>
        <Column className="gap-2 items-end">
          <Button
            icon="XIcon"
            onClick={onClose}
            className="text-gray-300 dark:text-gray-300 hover:text-red-500 rounded-md"
          />
          <ScheduleEventForm />
        </Column>
      </Backdrop>
    </Portal>
  )
}

export default Modal
