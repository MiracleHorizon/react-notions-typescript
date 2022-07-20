import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  openRenamePopup,
  setRenamePopupCoords,
  setRenamePopupEntity,
} from 'redux/actions'
import { currentPageSelector } from 'redux/selectors'
import { renamePopupCoordsHandler } from 'utils/coordsHandlers'
import { PageTitleContainer, Title, Icon } from './HeaderPageTitle.styles'

const HeaderPageTitle: FC = memo(() => {
  const currentPage = useSelector(currentPageSelector)
  const pageTitleRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onOpenRenamePopup = useCallback((): void => {
    const popupCoords = renamePopupCoordsHandler.header(
      pageTitleRef.current?.getBoundingClientRect()
    )

    dispatch(setRenamePopupCoords(popupCoords))
    dispatch(setRenamePopupEntity(currentPage))
    dispatch(openRenamePopup())
  }, [dispatch, currentPage])

  return (
    <PageTitleContainer ref={pageTitleRef} onClick={onOpenRenamePopup}>
      {currentPage.iconInfo.isHasIcon && (
        <Icon src={currentPage.iconInfo.iconUrl} alt='Icon' />
      )}
      <Title>{currentPage.title}</Title>
    </PageTitleContainer>
  )
})

export default HeaderPageTitle
