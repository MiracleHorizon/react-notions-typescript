import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setIsOpen } from '../../../redux/pagePopupSlice/slice'

import styles from './ActionButtons.module.scss'
import commentsSvg from '../../../assets/img/comments.svg'
import starSvg from '../../../assets/img/star-notFavorite.svg'
import favoriteStarSvg from '../../../assets/img/star-favorite.svg'
import optionsSvg from '../../../assets/img/three-dots.svg'

import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'
import { toggleFavorite } from '../../../redux/workSpaceSlice/slice'

const ActionButtons: React.FC = () => {
  const [isPageFavorite, setIsPageFavorite] = useState<boolean>(false)
  const currentPage = useSelector(currentPageSelector)

  useEffect(() => {
    if (currentPage) setIsPageFavorite(currentPage.isFavorite)
  }, [currentPage])

  const dispatch = useDispatch()
  const togglePopup = (): void => {
    dispatch(setIsOpen())
  }
  const toggleIsFavorite = (): void => {
    dispatch(toggleFavorite(currentPage?.id))
  }

  return (
    <div className={styles.actionButtons}>
      <span>Share</span>
      <div>
        <img src={commentsSvg} alt='Comments' />
      </div>
      <div onClick={toggleIsFavorite}>
        <img src={isPageFavorite ? favoriteStarSvg : starSvg} alt='Favorites' />
      </div>
      <div onClick={togglePopup}>
        <img src={optionsSvg} alt='Options' />
      </div>
    </div>
  )
}

export default ActionButtons
