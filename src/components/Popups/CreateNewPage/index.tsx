import React, { Fragment, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import Modal from 'shared/ModalWindows/ModalWrapper'
import styles from './CreateNewPageModal.module.scss'
import CreateNewPageNavbar from './Navbar'

const CreateNewPageModal: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(true)

  const handleClickOutside = (): void => {
    setIsOpen(false)
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <Fragment>
      {isOpen && (
        <Modal>
          <div className={styles.root} ref={modalRef}>
            <CreateNewPageNavbar />
            <div className={styles.content}></div>
          </div>
        </Modal>
      )}
    </Fragment>
  )
}

export default CreateNewPageModal
