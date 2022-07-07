import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FavoriteStarSvg from 'shared/SVG/FavoriteStar'
import UnfavoriteStarSvg from 'shared/SVG/UnfavoriteStar'
import HeaderCommentsSvg from 'shared/SVG/HeaderComments'
import OptionsDotsSvg from 'shared/SVG/OptionsDots'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { toggleFavorite } from 'redux/workSpaceSlice/slice'
import { toggleRightSidebar } from 'redux/sidebarsSlice/slice'
import { openPageSettingsPopup } from 'redux/popupsSlice/slice'
import {
  StyledPanel,
  ShareTitle,
  OptionButton,
} from './PageSettingsPanel.styles'

const PageSettingsPanel: React.FC = () => {
  const [isPageFavorite, setFavorite] = useState<boolean>(false) //!
  const { id, isFavorite } = useSelector(currentPageSelector)

  const panelRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const onOpenSettingsModal = (): void => {
    dispatch(openPageSettingsPopup())
  }
  const onOpenRightSidebar = (): void => {
    dispatch(toggleRightSidebar())
  }
  const onToggleFavorite = (): void => {
    dispatch(toggleFavorite(id))
  }

  useEffect(() => setFavorite(isFavorite), [isFavorite]) //* Лишний рендер

  return (
    <StyledPanel ref={panelRef}>
      <OptionButton role='button'>
        <ShareTitle>Share</ShareTitle>
      </OptionButton>
      <OptionButton role='button' onClick={onOpenRightSidebar}>
        <HeaderCommentsSvg />
      </OptionButton>
      <OptionButton role='button' onClick={onToggleFavorite}>
        {isPageFavorite ? (
          <FavoriteStarSvg />
        ) : (
          <UnfavoriteStarSvg sizes={{ width: 20, height: 20 }} />
        )}
      </OptionButton>
      <OptionButton role='button' onClick={onOpenSettingsModal}>
        <OptionsDotsSvg />
      </OptionButton>
    </StyledPanel>
  )
}

export default PageSettingsPanel
