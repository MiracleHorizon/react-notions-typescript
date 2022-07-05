import React from 'react'
import { createPortal } from 'react-dom'
import ModalWrapper from './Modal.styles'

const Modal: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return createPortal(
    <ModalWrapper>{children}</ModalWrapper>,
    document.getElementById('root') as HTMLElement
  )
}

export default Modal
