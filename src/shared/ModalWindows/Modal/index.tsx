import React from 'react'
import styles from './Modal.module.scss'
import { createPortal } from 'react-dom'

const Modal: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return createPortal(
    <div className={styles.modal}>{children}</div>,
    document.getElementById('root') as HTMLElement
  )
}

export default Modal
// <div className={styles.modalInset} />
