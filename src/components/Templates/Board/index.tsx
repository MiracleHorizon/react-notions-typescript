import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Banner from '../../../shared/Banner'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'

import styles from './Board.module.scss'
import reactSvg from '../../../assets/img/technologies/react.svg'
import commentSvg from '../../../assets/img/comments.svg'
import PopupInput from '../../../shared/ChangePageTitlePopup'

const Board: React.FC = () => {
  const currentPage = useSelector(currentPageSelector)
  const [isHasBanner, setBanner] = useState<boolean>(true)

  return (
    <div className={styles.board}>
      {isHasBanner && <Banner />}
      <div className={styles.content}>
        <div className={styles.pageIcon}>
          <img src={reactSvg} alt='Page Icon' />
        </div>
        <div className={styles.commentBlock}>
          <div>
            <img src={commentSvg} alt='' />
            <span>Add comment</span>
          </div>
        </div>
        <div className={styles.pageTitle}>
          <h1>{currentPage.pageTitle}</h1>
        </div>
        <PopupInput value={currentPage.pageTitle} />
      </div>
    </div>
  )
}

export default Board
