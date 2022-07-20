import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  openChangeIconPopup,
  setChangeIconPopupCoords,
  setChangeIconPopupPage,
} from 'redux/actions'
import { currentPageSelector } from 'redux/selectors'
import { changeIconPopupCoordsHandler } from 'utils/coordsHandlers'
import { PageIconContainer, Icon } from './PageIcon.styles'

const PageIcon: FC = memo(() => {
  const currentPage = useSelector(currentPageSelector)
  const iconRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onOpenChangeIconPopup = useCallback((): void => {
    const popupCoords = changeIconPopupCoordsHandler.workspace(
      iconRef.current?.getBoundingClientRect()
    )

    dispatch(openChangeIconPopup())
    dispatch(setChangeIconPopupPage(currentPage))
    dispatch(setChangeIconPopupCoords(popupCoords))
  }, [dispatch, currentPage])

  return (
    <PageIconContainer
      ref={iconRef}
      isHasCover={currentPage.coverInfo.isHasCover}
      onClick={onOpenChangeIconPopup}
    >
      <Icon src={currentPage.iconInfo.iconUrl} alt='Icon' />
    </PageIconContainer>
  )
})

export default PageIcon
