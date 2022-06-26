import React from 'react'
import { useSelector } from 'react-redux'

import PageCover from '../../PageCover'
import BoardOptions from './BoardOptions'
import BoardContent from './BoardContent'
import classNameHandler from '../../../utils/helpers/boardClassNameHandler'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'
import { CoverColors } from '../../../redux/workSpaceSlice/types'
import styles from './Board.module.scss'

const Board: React.FC = () => {
  const { isSmallText, isFullWidth, isHasCover, cover } =
    useSelector(currentPageSelector)

  return (
    <div className={styles.board}>
      {<PageCover cover={isHasCover ? cover : CoverColors.WHITE} />}
      <div className={classNameHandler({ isSmallText, isFullWidth })}>
        <BoardOptions />
        <BoardContent />
      </div>
    </div>
  )
}

export default Board
