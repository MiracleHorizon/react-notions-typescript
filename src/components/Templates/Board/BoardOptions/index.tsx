import React from 'react'
import { useSelector } from 'react-redux'

import PageDecorOption from '../../../PageDecorOption'
import { currentPageSelector } from '../../../../redux/workSpaceSlice/selectors'
import styles from './BoardOptions.module.scss'
import addIconSvg from '../../../../assets/img/addIcon.svg'
import coverSvg from '../../../../assets/img/cover.svg'
import commentSvg from '../../../../assets/img/comments.svg'

const BoardOptions: React.FC = () => {
  const { pageTitle, icon, isHasCover, isHasIcon, isHasComments } =
    useSelector(currentPageSelector)

  return (
    <div className={styles.options}>
      {isHasIcon && (
        <div className={styles.pageIcon}>
          <img src={icon} alt='Page icon' />
        </div>
      )}
      <div className={styles.optionsBlock}>
        {!isHasIcon && (
          <PageDecorOption iconImg={addIconSvg} optionsTitle={'icon'} />
        )}
        {!isHasCover && (
          <PageDecorOption iconImg={coverSvg} optionsTitle={'cover'} />
        )}
        {!isHasComments && (
          <PageDecorOption iconImg={commentSvg} optionsTitle={'comment'} />
        )}
      </div>
      <div className={styles.pageTitle}>
        <h1>{pageTitle}</h1>
      </div>
    </div>
  )
}

export default BoardOptions
