import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import BoardPagePopup from './PopupTemplates/BoardPopup'

import { pageTemplateSelector } from '../../../redux/pagePopupSlice/selectors'
import { Templates } from '../../../redux/pagePopupSlice/types'

import styles from './PageSettingsPopup.module.scss'

const PageSettingsPopup = () => {
  const pageTemplate = useSelector(pageTemplateSelector)
  const ref = useRef(null)

  const pageTemplatedHandler = () => {
    switch (pageTemplate) {
      case Templates.BOARD:
        return <BoardPagePopup />
      case Templates.TASK_LIST:
        return <></>
      case Templates.TABLE:
        return <></>
    }
  }

  return (
    <div ref={ref} className={styles.popup}>
      {pageTemplatedHandler()}
    </div>
  )
}

export default PageSettingsPopup
