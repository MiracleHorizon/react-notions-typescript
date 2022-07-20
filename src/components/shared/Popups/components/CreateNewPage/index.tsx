import React, { FC, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import CreateNewPagePopupNavbar from './Navbar'
import Popup from 'components/shared/Popups/index'
import styles from './CreateNewPageModal.module.scss'

const CreateNewPagePopup: FC = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(true)

  const handleClickOutside = (): void => {
    setIsOpen(false)
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <>
      {isOpen && (
        <Popup>
          <div className={styles.root} ref={modalRef}>
            <CreateNewPagePopupNavbar />
            <div className={styles.content}></div>
          </div>
        </Popup>
      )}
    </>
  )
}

export default CreateNewPagePopup
