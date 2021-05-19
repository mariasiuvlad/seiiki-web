import React from 'react'
import {Portal} from 'react-portal'
import TextInput from 'components/atoms/TextInput'
import Button from 'components/atoms/Button'
import {Column} from 'components/atoms/Flex'
import {ParagraphSecondary} from 'components/atoms/Typography'
import {IconButton} from 'components/atoms/Button/Button'

const Backdrop = ({children}) => {
  return (
    <Column className="absolute top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-50">
      {children}
    </Column>
  )
}

const Modal = ({onClose}) => (
  <Portal>
    <Backdrop>
      <Column className="card font-light p-4">
        <IconButton onClick={onClose} icon="CloseCircle" className="absolute right-2 top-2" />
        <Column className="my-4">
          <ParagraphSecondary>Cron</ParagraphSecondary>
          <TextInput />
        </Column>
        <select className="mb-4 dark:bg-gray-800 dark:text-white">
          <option>Heating On</option>
          <option>Heating Off</option>
        </select>
        <Button label="Save" variant="primary" onClick={close} />
      </Column>
    </Backdrop>
  </Portal>
)

export default Modal
