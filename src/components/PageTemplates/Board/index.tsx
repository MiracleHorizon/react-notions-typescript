import React from 'react'
import { useSelector } from 'react-redux'

import PageCover from '../../Workspace/PageContent/PageOptionsPanel/PageCover'
import PageOptionsPanel from '../../Workspace/PageContent/PageOptionsPanel'
import BoardContent from './BoardContent'
import EmptyPage from '../EmptyPage'
import classNameHandler from '../../../utils/helpers/boardClassNameHandler'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'
import styles from './Board.module.scss'

const Board: React.FC = () => {
  const { isSmallText, isFullWidth, content, isHasIcon, isHasCover } =
    useSelector(currentPageSelector)

  const isPageEmptyCheck = (): JSX.Element => {
    if (isHasCover || isHasIcon || content) return <BoardContent />

    return <EmptyPage />
  }

  return (
    <div className={styles.board}>
      <PageCover />
      <div className={classNameHandler({ isSmallText, isFullWidth })}>
        <PageOptionsPanel />
        {isPageEmptyCheck()}
      </div>
    </div>
  )
}

export default Board
