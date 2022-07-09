import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AddRandomIconButton from 'shared/Buttons/PageDecorButton/components/AddRandomIcon'
import AddRandomCoverButton from 'shared/Buttons/PageDecorButton/components/AddRandomCover'
import AddFirstCommentButton from 'shared/Buttons/PageDecorButton/components/AddFirstComment'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  openChangeIconPopup,
  setChangeIconPopupCoords,
} from 'redux/popupsSlice/slice'
import { changeIconPopupCoordsHandler } from 'utils/coordsHandlers'
import {
  OptionsPanel,
  OptionsContainer,
  PageIconBlock,
  PageIcon,
} from './PageDecorOptions.styles'
import { useHover } from 'usehooks-ts'

const PageDecorOptions: React.FC = () => {
  const {
    iconInfo: { icon, isHasIcon },
    coverInfo: { isHasCover },
    commentsInfo: { isHasComments },
  } = useSelector(currentPageSelector)
  const dispatch = useDispatch()
  const iconRef = useRef<HTMLDivElement>(null)

  const panelRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(panelRef)

  const onOpenChangeIconPopup = (): void => {
    const iconRect = iconRef.current?.getBoundingClientRect()
    const changeIconPopupCoords =
      changeIconPopupCoordsHandler.setCoordsByWorkspace(iconRect)

    dispatch(openChangeIconPopup())
    dispatch(setChangeIconPopupCoords(changeIconPopupCoords))
  }

  return (
    <OptionsPanel ref={panelRef}>
      {isHasIcon && (
        <PageIconBlock ref={iconRef} onClick={onOpenChangeIconPopup}>
          <PageIcon src={icon} alt='Page icon' />
        </PageIconBlock>
      )}
      <OptionsContainer isHovering={isHovering}>
        {!isHasIcon && <AddRandomIconButton />}
        {!isHasCover && <AddRandomCoverButton />}
        {!isHasComments && <AddFirstCommentButton />}
      </OptionsContainer>
    </OptionsPanel>
  )
}

export default PageDecorOptions
