import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { workspacePagesSelector } from 'redux/workSpaceSlice/selectors'
import { newPageConstructor } from 'utils/defaultPageSettings'
import { createNewPage, setCurrentPage } from 'redux/workSpaceSlice/slice'
import addPageSvg from 'assets/img/plus-addPage.svg'
import styles from './NewPageBar.module.scss'

const NewPageBar: React.FC = () => {
  const workspacePages = useSelector(workspacePagesSelector)

  const dispatch = useDispatch()
  const onCreateNewPage = (): void => {
    const newPage = newPageConstructor()
    newPage.id = workspacePages.length + 1 //!

    dispatch(createNewPage(newPage))
    dispatch(setCurrentPage(newPage.id))
  }

  return (
    <div className={styles.newPageBar} onClick={onCreateNewPage}>
      <div role='button' className={styles.newPageBtn}>
        <img src={addPageSvg} alt='Add page' />
      </div>
      <span>New page</span>
    </div>
  )
}

export default NewPageBar
