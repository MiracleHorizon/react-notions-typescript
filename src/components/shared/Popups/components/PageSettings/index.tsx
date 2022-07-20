import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import Popup from '../../index'
import ListPageSettingsPopup from './ModalTemplates/Board'

import { PageTemplates } from 'redux/types'
import { currentPageSelector } from 'redux/selectors'

const PageSettingsPopup: FC = memo(() => {
  const { template } = useSelector(currentPageSelector)

  const pageTemplateHandler = () => {
    switch (template) {
      case PageTemplates.BOARD:
        return <ListPageSettingsPopup />
      // case PageTemplates.TASK_LIST:
      //   return <>Task List</>
      // case PageTemplates.CALENDAR:
      //   return <>Calendar</>
      default:
        return <></>
    }
  }

  return <Popup>{pageTemplateHandler()}</Popup>
})

export default PageSettingsPopup
