import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  openRenamePopup,
  setRenamePopupCoords,
  setRenamePopupEssence,
} from 'redux/popupsSlice/slice'
import { renamePopupCoordsHandler } from 'utils/coordsHandlers'
import { PageTitleContainer, Title, Icon } from './HeaderPageTitle.styles'

const HeaderPageTitle: React.FC = () => {
  const { id, title, iconInfo } = useSelector(currentPageSelector)
  const pageTitleRef = useRef<HTMLDivElement>(null)

  const pageTitleRect = pageTitleRef.current?.getBoundingClientRect()
  const renamePagePopupCoords =
    renamePopupCoordsHandler.setCoordsByHeader(pageTitleRect)

  const dispatch = useDispatch()
  const onOpenChangePageTitlePopup = (): void => {
    dispatch(setRenamePopupCoords(renamePagePopupCoords))
    dispatch(setRenamePopupEssence({ id, title, iconInfo }))
    dispatch(openRenamePopup())
  }

  return (
    <>
      <PageTitleContainer
        ref={pageTitleRef}
        onClick={onOpenChangePageTitlePopup}
      >
        {iconInfo.isHasIcon && <Icon src={iconInfo.icon} alt='Page icon' />}
        <Title>{title}</Title>
      </PageTitleContainer>
    </>
  )
}

export default HeaderPageTitle
