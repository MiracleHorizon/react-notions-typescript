import React from 'react'
import { useSelector } from 'react-redux'

import BoardPagePopup from './PopupTemplates/BoardPopup'

import { pageTemplateSelector } from '../../../redux/popupsSlice/selectors'
import { PageTemplates } from '../../../redux/popupsSlice/types'

import styles from './PageSettingsPopup.module.scss'

const PageSettingsPopup: React.FC = () => {
  const pageTemplate = useSelector(pageTemplateSelector)

  const pageTemplatedHandler = () => {
    switch (pageTemplate) {
      case PageTemplates.BOARD:
        return <BoardPagePopup />
      case PageTemplates.TASK_LIST:
        return <>Task List</>
      case PageTemplates.CALENDAR:
        return <>Table</>
    }
  }

  return <div className={styles.popup}>{pageTemplatedHandler()}</div>
}

export default PageSettingsPopup
