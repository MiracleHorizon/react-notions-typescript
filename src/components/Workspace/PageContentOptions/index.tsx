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
  PageTitle,
} from './PageContentOptions.styles'

const PageContentOptions: React.FC = () => {
  const {
    title,
    iconInfo: { icon, isHasIcon },
    coverInfo: { isHasCover },
    commentsInfo: { isHasComments },
  } = useSelector(currentPageSelector)
  const dispatch = useDispatch()
  const iconRef = useRef<HTMLDivElement>(null)

  const onOpenChangeIconPopup = (): void => {
    const iconRect = iconRef.current?.getBoundingClientRect()
    const changeIconPopupCoords =
      changeIconPopupCoordsHandler.setCoordsByWorkspace(iconRect)

    dispatch(openChangeIconPopup())
    dispatch(setChangeIconPopupCoords(changeIconPopupCoords))
  }

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <OptionsPanel>
      {isHasIcon && (
        <PageIconBlock ref={iconRef} onClick={onOpenChangeIconPopup}>
          <PageIcon src={icon} alt='Page icon' />
        </PageIconBlock>
      )}
      <OptionsContainer>
        {!isHasIcon && <AddRandomIconButton />}
        {!isHasCover && <AddRandomCoverButton />}
        {!isHasComments && <AddFirstCommentButton />}
      </OptionsContainer>
      <PageTitle>{title}</PageTitle>
    </OptionsPanel>
  )
}

export default PageContentOptions
