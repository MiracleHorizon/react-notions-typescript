import React from 'react'
import { useSelector } from 'react-redux'

import Popup from '../index'
import BoardPageSettingsPopup from './ModalTemplates/Board'
import { PageTemplates } from 'redux/popupsSlice/types'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'

const PageSettingsPopup: React.FC = () => {
  const { template } = useSelector(currentPageSelector)

  const pageTemplateHandler = () => {
    switch (template) {
      case PageTemplates.BOARD:
        return <BoardPageSettingsPopup />
      // case PageTemplates.TASK_LIST:
      //   return <>Task List</>
      // case PageTemplates.CALENDAR:
      //   return <>Calendar</>
      default:
        return <></>
    }
  }

  return <Popup>{pageTemplateHandler()}</Popup>
}

export default PageSettingsPopup
