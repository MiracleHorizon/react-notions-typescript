import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageSettingsPopup from '../../../shared/ModalWindows/PageSettings'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'
import { pageSettingsPopupSelector } from '../../../redux/popupsSlice/selectors'
import { toggleFavorite } from '../../../redux/workSpaceSlice/slice'
import {
  closeSettingsPopup,
  openSettingsPopup,
} from '../../../redux/popupsSlice/slice'
import styles from './ActionButtons.module.scss'
import commentsSvg from '../../../assets/img/comments.svg'
import starSvg from '../../../assets/img/star-notFavorite.svg'
import favoriteStarSvg from '../../../assets/img/star-favorite.svg'
import optionsSvg from '../../../assets/img/three-dots.svg'

const ActionButtons: React.FC = () => {
  const [isPageFavorite, setIsPageFavorite] = useState<boolean>(false)
  const isPageSettingsPopupOpen = useSelector(pageSettingsPopupSelector)
  const pageOptionsRef = useRef<HTMLDivElement>(null)
  const currentPage = useSelector(currentPageSelector)

  const dispatch = useDispatch()
  const togglePopup = () => dispatch(openSettingsPopup())
  const toggleIsFavorite = () => dispatch(toggleFavorite(currentPage?.id))

  useEffect(() => {
    if (currentPage) setIsPageFavorite(currentPage.isFavorite)
  }, [currentPage])

  useEffect(() => {
    const popupClickHandler = (e: MouseEvent): void => {
      if (!pageOptionsRef.current) return

      if (!e.composedPath().includes(pageOptionsRef.current)) {
        dispatch(closeSettingsPopup())
      }
    }
    document.body.addEventListener('click', popupClickHandler)

    return () => {
      document.body.removeEventListener('click', popupClickHandler)
    }
  })

  return (
    <div className={styles.actionButtons}>
      <span>Share</span>
      <div className={styles.actionButton}>
        <img src={commentsSvg} alt='Comments' />
      </div>
      <div className={styles.actionButton} onClick={toggleIsFavorite}>
        <img src={isPageFavorite ? favoriteStarSvg : starSvg} alt='Favorites' />
      </div>
      <div ref={pageOptionsRef} onClick={togglePopup}>
        <div className={styles.actionButton}>
          <img src={optionsSvg} alt='Options' />
        </div>
        {isPageSettingsPopupOpen && <PageSettingsPopup />}
      </div>
    </div>
  )
}

export default ActionButtons
