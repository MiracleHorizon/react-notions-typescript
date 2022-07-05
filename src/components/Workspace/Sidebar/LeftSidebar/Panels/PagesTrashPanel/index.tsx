import React from 'react'
import { useDispatch } from 'react-redux'

import SidebarOptionsPanel from 'components/Options/OptionsList/SidebarOptionsPanel'
import { TrashSvg } from 'shared/SVG'
import { openPagesTrashModal } from 'redux/modalsSlice/slice'
import { PanelWrapper } from './PagesTrashPanel.styles'

const PagesTrashPanel: React.FC = () => {
  const dispatch = useDispatch()

  const onOpenPagesTrashPopup = (): void => {
    dispatch(openPagesTrashModal())
  }

  const pagesTrashOption = {
    title: 'Trash',
    IconSvg: TrashSvg,
    action: onOpenPagesTrashPopup,
  }

  return (
    <PanelWrapper>
      <SidebarOptionsPanel options={pagesTrashOption} />
    </PanelWrapper>
  )
}

export default PagesTrashPanel
