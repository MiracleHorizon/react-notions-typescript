import React from 'react'
import { useCreateNewPage } from 'hooks/useCreateNewPage'

import addPageSvg from 'assets/img/plus-addPage.svg'
import styles from './NewPageBar.module.scss'
import { setActivePage } from 'redux/sidebarSlice/slice'
import { useDispatch, useSelector } from 'react-redux'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'

const NewPageBar: React.FC = () => {
  const { id } = useSelector(currentPageSelector)
  const onCreateNewPage = useCreateNewPage()

  const dispatch = useDispatch()
  const onClickHandler = (): void => {
    onCreateNewPage()
    dispatch(setActivePage({ title: 'Untitled', id }))
  }

  return (
    <div className={styles.newPageBar} onClick={onClickHandler}>
      <div role='button' className={styles.newPageBtn}>
        <img src={addPageSvg} alt='Add page' />
      </div>
      <span>New page</span>
    </div>
  )
}

export default NewPageBar
