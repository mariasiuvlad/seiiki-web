import React from 'react'
import {Portal} from 'react-portal'
import TextInput from 'components/atoms/TextInput'
import * as Icons from 'icons'

const Modal = ({onClose}) => (
  <Portal>
    <div className="absolute top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="card font-light p-4">
        <button onClick={onClose} className="absolute right-0 top-0">
          <Icons.CloseCircle className="w-6 h-6 fill-current" />
        </button>
        <h3>Schedule</h3>
        <TextInput />
        <select className="mb-4 dark:bg-gray-800 dark:text-white">
          <option>Heating On</option>
          <option>Heating Off</option>
        </select>
        <button className="btn primary" onClick={close}>
          Save
        </button>
      </div>
    </div>
  </Portal>
)

export default Modal
