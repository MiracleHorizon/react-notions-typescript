import React from 'react'
import { useSelector } from 'react-redux'

import BoardPageSettingsModal from './ModalTemplates/Board/BoardTemplateSettings'
import { PageTemplates } from '../../../redux/popupsSlice/types'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'

const PageSettings: React.FC = () => {
  const { template } = useSelector(currentPageSelector)

  const pageTemplateHandler = () => {
    switch (template) {
      case PageTemplates.BOARD:
        return <BoardPageSettingsModal />
      case PageTemplates.TASK_LIST:
        return <>Task List</>
      case PageTemplates.CALENDAR:
        return <>Calendar</>
    }
  }

  return <div>{pageTemplateHandler()}</div>
}

export default PageSettings
