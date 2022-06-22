import React from 'react'
import { useSelector } from 'react-redux'

import ClassicPagePopup from './PopupTemplates/BoardPopup'

import { pageTemplateSelector } from '../../../redux/pagePopupSlice/selectors'
import { Templates } from '../../../redux/pagePopupSlice/types'

import styles from './PageSettingsPopup.module.scss'

const PageSettingsPopup = () => {
  const pageTemplate = useSelector(pageTemplateSelector)

  const pageTemplatedHandler = () => {
    switch (pageTemplate) {
      case Templates.BOARD:
        return <ClassicPagePopup />
      case Templates.TASK_LIST:
        return <></>
      case Templates.TABLE:
        return <></>
    }
  }

  return <div className={styles.popup}>{pageTemplatedHandler()}</div>
}

export default PageSettingsPopup
