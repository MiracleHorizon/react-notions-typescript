import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FavoriteStarSvg from 'shared/SVG/FavoriteStar'
import UnfavoriteStarSvg from 'shared/SVG/UnfavoriteStar'
import HeaderCommentsSvg from 'shared/SVG/HeaderComments'
import OptionsDotsSvg from 'shared/SVG/OptionsDots'
import PageSettingsPopup from 'shared/ModalWindows/PageSettings'
import MovePageToModal from 'shared/ModalWindows/MovePageTo'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { toggleFavorite } from 'redux/workSpaceSlice/slice'
import { pageSettingsPopupSelector } from 'redux/popupsSlice/selectors'
import { movePageToModalSelector } from 'redux/modalsSlice/selectors'
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

  const isPageSettingsPopupOpen = useSelector(pageSettingsPopupSelector)
  const isMovePageToModalOpen = useSelector(movePageToModalSelector).isOpen
  const dispatch = useDispatch()

  const pageSettingsPopupRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const onToggleSettingsModal = (): void => {
    dispatch(openPageSettingsPopup()) //* toggle
  }
  const onOpenRightSidebar = (): void => {
    dispatch(toggleRightSidebar())
  }
  const onToggleFavorite = (): void => {
    dispatch(toggleFavorite(id))
  }

  useEffect(() => setFavorite(isFavorite), [isFavorite]) //* Лишний рендер

  return (
    <>
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
        <div ref={pageSettingsPopupRef}>
          <OptionButton role='button' onClick={onToggleSettingsModal}>
            <OptionsDotsSvg />
          </OptionButton>
        </div>
      </StyledPanel>
      {isMovePageToModalOpen && <MovePageToModal />}
      {isPageSettingsPopupOpen && <PageSettingsPopup />}
    </>
  )
}

export default PageSettingsPanel
