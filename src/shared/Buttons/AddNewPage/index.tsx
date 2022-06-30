import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useCreateNewPage } from 'hooks/useCreateNewPage'

import AddNewPageToolkit from '../../Tooltips/AddNewPage'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import addPageSvg from 'assets/img/plus-addPage.svg'
import styles from './AddNewPageButton.module.scss'

const AddNewPageButton: React.FC = () => {
  const { id } = useSelector(currentPageSelector)
  const buttonRef = useRef<HTMLButtonElement>(null) //! div || button
  const isHovering = useHover(buttonRef)
  const onCreateNewPage = useCreateNewPage(id!)

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
