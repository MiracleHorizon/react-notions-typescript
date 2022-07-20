import React, { FC, memo, useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { SidebarOptionsPanel } from 'components/shared/Options'
import { TrashSvg } from 'components/ui/SVG'
import { openPagesTrashPopup } from 'redux/actions'
import PanelWrapper from './PagesTrashPanel.styles'

const PagesTrashPanel: FC = memo(() => {
  const dispatch = useDispatch()

  const onOpenPagesTrashPopup = useCallback((): void => {
    dispatch(openPagesTrashPopup())
  }, [dispatch])

  const pagesTrashOptions = useMemo(() => {
    return {
      title: 'Trash',
      IconSvg: TrashSvg,
      onClickAction: onOpenPagesTrashPopup,
    }
  }, [onOpenPagesTrashPopup])

  return (
    <PanelWrapper>
      <SidebarOptionsPanel options={pagesTrashOptions} />
    </PanelWrapper>
  )
})

export default PagesTrashPanel
