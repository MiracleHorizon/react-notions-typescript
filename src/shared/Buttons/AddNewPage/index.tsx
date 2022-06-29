import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useCreateNewPage } from 'hooks/useCreateNewPage'

import AddNewPageToolkit from '../../Tooltips/AddNewPage'
import { setActivePage } from 'redux/sidebarSlice/slice'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import addPageSvg from 'assets/img/plus-addPage.svg'
import styles from './AddNewPageButton.module.scss'

const AddNewPageButton: React.FC = () => {
  const { id } = useSelector(currentPageSelector)
  const buttonRef = useRef<HTMLButtonElement>(null) //! div || button
  const isHovering = useHover(buttonRef)
  const onCreateNewPage = useCreateNewPage()

  const dispatch = useDispatch()
  const onClickHandler = (): void => {
    onCreateNewPage()
    dispatch(setActivePage({ title: 'Untitled', id }))
  }

  return (
    <button
      className={styles.addPageBtn}
      ref={buttonRef}
      onClick={onClickHandler}
    >
      <img src={addPageSvg} alt='Add page' />
      {isHovering && <AddNewPageToolkit />}
    </button>
  )
}

export default AddNewPageButton
