import React from 'react'
import { useSelector } from 'react-redux'

import { currentPageSelector } from '../../../../redux/workSpaceSlice/selectors'
import styles from '../BoardContent/BoardContent.module.scss'
import commentSvg from '../../../../assets/img/comments.svg'

interface IBoardContentProps {}

const BoardContent: React.FC = () => {
  const { pageTitle, pageImg } = useSelector(currentPageSelector)
  //! Блок иконки и баннера

  return (
    <div className={styles.content}>
      <div className={styles.pageIcon}>
        <img src={pageImg} alt='Page Icon' />
      </div>
      <div className={styles.commentBlock}>
        <div>
          <img src={commentSvg} alt='' />
          <span>Add comment</span>
        </div>
      </div>
      <div className={styles.pageTitle}>
        <h1>{pageTitle}</h1>
      </div>
    </div>
  )
}

export default BoardContent
