import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { useCreateNewPage } from 'hooks/useCreateNewPage'

import AddNewPageToolkit from '../../Tooltips/AddNewPage'
import addPageSvg from '../../../assets/img/plus-addPage.svg'
import styles from './AddNewPageButton.module.scss'

const AddNewPageButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null) //! div || button
  const isHovering = useHover(buttonRef)
  const onCreateNewPage = useCreateNewPage()

  return (
    <button
      className={styles.addPageBtn}
      ref={buttonRef}
      onClick={onCreateNewPage}
    >
      <img src={addPageSvg} alt='Add page' />
      {isHovering && <AddNewPageToolkit />}
    </button>
  )
}

export default AddNewPageButton
