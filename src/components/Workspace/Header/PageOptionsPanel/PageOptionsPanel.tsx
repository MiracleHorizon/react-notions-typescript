import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import PageSettingsPopup from 'shared/ModalWindows/PageSettings'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { toggleFavorite } from 'redux/workSpaceSlice/slice'
import { pageSettingsPopupSelector } from 'redux/popupsSlice/selectors'
import { closeSettingsModal, openSettingsModal } from 'redux/popupsSlice/slice'
import commentsSvg from 'assets/img/optionsImgs/comments.svg'
import starSvg from 'assets/img/optionsImgs/star-notFavorite.svg'
import favoriteStarSvg from 'assets/img/optionsImgs/star-favorite.svg'
import optionsSvg from 'assets/img/optionsImgs/three-dots.svg'
import {
  StyledPanel,
  ShareTitle,
  OptionButton,
  OptionIcon,
} from './PageOptionsPanel.styles'

const PageOptionsPanel: React.FC = () => {
  const [isPageFavorite, setFavorite] = useState<boolean>(false) //!
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const { id, isFavorite } = useSelector(currentPageSelector)
  const isPageSettingsPopupOpen = useSelector(pageSettingsPopupSelector)

  const dispatch = useDispatch()
  const onToggleSettingsModal = (): void => {
    setIsModalOpen(true)
  }
  const toggleIsFavorite = (): void => {
    dispatch(toggleFavorite(id))
  }
  const handleClickOutside = (): void => {
    setIsModalOpen(false)
  }

  useOnClickOutside(modalRef, handleClickOutside)
  useEffect(() => setFavorite(isFavorite), [isFavorite])

  return (
    <StyledPanel>
      <OptionButton role='button'>
        <ShareTitle>Share</ShareTitle>
      </OptionButton>
      <OptionButton role='button'>
        <OptionIcon src={commentsSvg} alt='Comments' />
      </OptionButton>
      <OptionButton role='button' onClick={toggleIsFavorite}>
        <OptionIcon
          src={isPageFavorite ? favoriteStarSvg : starSvg}
          alt='Favorites'
        />
      </OptionButton>
      <div ref={modalRef} onClick={onToggleSettingsModal}>
        <OptionButton>
          <OptionIcon src={optionsSvg} alt='Options' />
        </OptionButton>
        {isModalOpen && <PageSettingsPopup />}
      </div>
    </StyledPanel>
  )
}

export default PageOptionsPanel

// dispatch(openSettingsModal())
// dispatch(closeSettingsModal())
