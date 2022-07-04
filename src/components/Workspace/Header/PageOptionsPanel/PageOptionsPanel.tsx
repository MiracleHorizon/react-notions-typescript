import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import FavoriteStarSVG from 'shared/SVG/FavoriteStar'
import UnfavoriteStarSVG from 'shared/SVG/UnfavoriteStar'
import HeaderCommentsSVG from 'shared/SVG/HeaderComments'
import OptionsDotsSVG from 'shared/SVG/OptionsDots'
import PageSettingsPopup from 'shared/ModalWindows/PageSettings/PageSettingsPopup'
import MovePageToModal from 'shared/ModalWindows/MovePageTo/MovePageToModal'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { toggleFavorite } from 'redux/workSpaceSlice/slice'
import { pageSettingsPopupSelector } from 'redux/popupsSlice/selectors'
import { movePageToModalSelector } from 'redux/modalsSlice/selectors'
import { openRightSidebar } from 'redux/sidebarsSlice/slice'
import {
  closePageSettingsPopup,
  openPageSettingsPopup,
} from 'redux/popupsSlice/slice'
import setCoordsByDOMRect from 'utils/helpers/setCoordsByDOMRect'
import { ElementPositions } from '../../../../@types/types'
import {
  StyledPanel,
  ShareTitle,
  OptionButton,
} from './PageOptionsPanel.styles'

const PageOptionsPanel: React.FC = () => {
  const [isPageFavorite, setFavorite] = useState<boolean>(false)
  const { id, isFavorite } = useSelector(currentPageSelector)
  const isPageSettingsPopupOpen = useSelector(pageSettingsPopupSelector) //! modal
  const isMovePageToModalOpen = useSelector(movePageToModalSelector)
  const dispatch = useDispatch()

  const pageSettingsPopupRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const moveToCoords = setCoordsByDOMRect({
    element: panelRef.current,
    requiredProperties: [ElementPositions.TOP, ElementPositions.RIGHT],
  }) //* useCallback, лишний рендер

  const onToggleSettingsModal = (): void => {
    dispatch(openPageSettingsPopup()) //* toggle
  }
  const onOpenRightSidebar = (): void => {
    dispatch(openRightSidebar())
  }
  const onToggleFavorite = (): void => {
    dispatch(toggleFavorite(id))
  }
  const handleClickOutside = (): void => {
    dispatch(closePageSettingsPopup())
  }

  useOnClickOutside(pageSettingsPopupRef, handleClickOutside)
  useEffect(() => setFavorite(isFavorite), [isFavorite]) //* Лишний рендер

  return (
    <StyledPanel ref={panelRef}>
      {isMovePageToModalOpen && <MovePageToModal coords={moveToCoords!} />}
      <OptionButton role='button'>
        <ShareTitle>Share</ShareTitle>
      </OptionButton>
      <OptionButton role='button' onClick={onOpenRightSidebar}>
        <HeaderCommentsSVG />
      </OptionButton>
      <OptionButton role='button' onClick={onToggleFavorite}>
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
