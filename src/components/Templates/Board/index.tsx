import React from 'react'
import { useSelector } from 'react-redux'

import PageCover from '../../../shared/PageCover'
import BoardOptions from './BoardOptions'
import BoardContent from './BoardContent'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'
import { CoverColors } from '../../../redux/workSpaceSlice/types'
import styles from './Board.module.scss'

const Board: React.FC = () => {
  const { isHasCover, cover } = useSelector(currentPageSelector)

  return (
    <div className={styles.board}>
      {<PageCover cover={isHasCover ? cover : CoverColors.WHITE} />}
      <BoardOptions />
      <BoardContent />
    </div>
  )
}

export default Board
