import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import FavoriteStarSVG from '../../../../shared/SVG/LightThene/FavoriteStar'
import UnfavoriteStarSVG from '../../../../shared/SVG/LightThene/UnfavoriteStar'
import HeaderCommentsSVG from '../../../../shared/SVG/LightThene/HeaderComments'
import OptionsDotsSVG from '../../../../shared/SVG/LightThene/OptionsDots'
import PageSettingsPopup from 'shared/ModalWindows/PageSettings/PageSettingsPopup'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { toggleFavorite } from 'redux/workSpaceSlice/slice'
import { pageSettingsPopupSelector } from 'redux/popupsSlice/selectors'
import {
  closePageSettingsPopup,
  openPageSettingsPopup,
} from 'redux/popupsSlice/slice'
import { openRightSidebar } from 'redux/sidebarsSlice/slice'
import {
  StyledPanel,
  ShareTitle,
  OptionButton,
} from './PageOptionsPanel.styles'

const PageOptionsPanel: React.FC = () => {
  const [isPageFavorite, setFavorite] = useState<boolean>(false)
  const { id, isFavorite } = useSelector(currentPageSelector)
  const isPageSettingsPopupOpen = useSelector(pageSettingsPopupSelector)
  const pageSettingsPopupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onToggleSettingsModal = (): void => {
    dispatch(openPageSettingsPopup())
  }
  const onOpenRightSidebar = (): void => {
    dispatch(openRightSidebar())
  }
  const toggleIsFavorite = (): void => {
    dispatch(toggleFavorite(id))
  }
  const handleClickOutside = (): void => {
    dispatch(closePageSettingsPopup())
  }

  useOnClickOutside(pageSettingsPopupRef, handleClickOutside)

  useEffect(() => setFavorite(isFavorite), [isFavorite])

  return (
    <StyledPanel>
      <OptionButton role='button'>
        <ShareTitle>Share</ShareTitle>
      </OptionButton>
      <OptionButton role='button' onClick={onOpenRightSidebar}>
        <HeaderCommentsSVG />
      </OptionButton>
      <OptionButton role='button' onClick={toggleIsFavorite}>
        {isPageFavorite ? (
          <FavoriteStarSVG />
        ) : (
          <UnfavoriteStarSVG sizes={{ width: 20, height: 20 }} />
        )}
      </OptionButton>
      <div ref={pageSettingsPopupRef}>
        <OptionButton role='button' onClick={onToggleSettingsModal}>
          <OptionsDotsSVG />
        </OptionButton>
        {isPageSettingsPopupOpen && <PageSettingsPopup />}
      </div>
    </StyledPanel>
  )
}

export default PageOptionsPanel
