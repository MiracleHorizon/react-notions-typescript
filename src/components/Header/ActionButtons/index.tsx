import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import PageSettingsPopup from '../../../shared/ModalWindows/PageSettings'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'
import { pageSettingsPopupSelector } from '../../../redux/popupsSlice/selectors'
import { toggleFavorite } from '../../../redux/workSpaceSlice/slice'
import {
  closeSettingsModal,
  openSettingsModal,
} from '../../../redux/popupsSlice/slice'
import styles from './ActionButtons.module.scss'
import commentsSvg from '../../../assets/img/optionsImgs/comments.svg'
import starSvg from '../../../assets/img/optionsImgs/star-notFavorite.svg'
import favoriteStarSvg from '../../../assets/img/optionsImgs/star-favorite.svg'
import optionsSvg from '../../../assets/img/optionsImgs/three-dots.svg'

const ActionButtons: React.FC = () => {
  const [isPageFavorite, setFavorite] = useState<boolean>(false) //!
  const modalRef = useRef<HTMLDivElement>(null)
  const currentPage = useSelector(currentPageSelector)
  const isPageSettingsPopupOpen = useSelector(pageSettingsPopupSelector)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const dispatch = useDispatch()
  const onToggleSettingsModal = (): void => {
    // dispatch(openSettingsModal())
    setIsModalOpen(true)
  }
  const toggleIsFavorite = (): void => {
    dispatch(toggleFavorite(currentPage?.id))
  }
  const handleClickOutside = (): void => {
    // dispatch(closeSettingsModal())
    setIsModalOpen(false)
  }

  useOnClickOutside(modalRef, handleClickOutside)
  useEffect(() => {
    if (currentPage) setFavorite(currentPage.isFavorite)
  }, [currentPage])

  return (
    <div className={styles.actionButtons}>
      <span>Share</span>
      <div className={styles.actionButton}>
        <img src={commentsSvg} alt='Comments' />
      </div>
      <div className={styles.actionButton} onClick={toggleIsFavorite}>
        <img src={isPageFavorite ? favoriteStarSvg : starSvg} alt='Favorites' />
      </div>
      <div ref={modalRef} onClick={onToggleSettingsModal}>
        <div className={styles.actionButton}>
          <img src={optionsSvg} alt='Options' />
        </div>
        {isModalOpen && <PageSettingsPopup />}
      </div>
    </div>
  )
}

export default ActionButtons
