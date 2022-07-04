import React from 'react'
import { useSelector } from 'react-redux'

import BoardPageSettingsModal from './ModalTemplates/Board/BoardTemplateSettings'
import TaskListPageModal from './ModalTemplates/TaskList'
import { PageTemplates } from '../../../redux/popupsSlice/types'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'

const PageSettings: React.FC = () => {
  const { template } = useSelector(currentPageSelector)

  const pageTemplateHandler = () => {
    switch (template) {
      case PageTemplates.BOARD:
        return <BoardPageSettingsModal />
      case PageTemplates.TASK_LIST:
        return <TaskListPageModal />
      case PageTemplates.CALENDAR:
        return <>Calendar</>
    }
  }

  return <div>{pageTemplateHandler()}</div>
}

export default PageSettings
