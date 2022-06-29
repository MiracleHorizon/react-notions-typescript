import React from 'react'
import { useSelector } from 'react-redux'

import PageCover from '../../Workspace/PageOptionsPanel/PageCover'
import PageOptionsPanel from '../../Workspace/PageOptionsPanel'
import BoardContent from './BoardContent'
import classNameHandler from '../../../utils/helpers/boardClassNameHandler'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'
import styles from './Board.module.scss'
import EmptyPage from '../EmptyPage'

const Board: React.FC = () => {
  const { isSmallText, isFullWidth, content } = useSelector(currentPageSelector)

  return (
    <div className={styles.board}>
      <PageCover />
      <div className={classNameHandler({ isSmallText, isFullWidth })}>
        <PageOptionsPanel />
        {content ? <BoardContent /> : <EmptyPage />}
      </div>
    </div>
  )
}

export default Board
