import React from 'react'
import styles from './Modal.module.scss'

const Modal: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <div className={styles.modal}>{children}</div>
}

export default Modal
// <div className={styles.modalInset} />
