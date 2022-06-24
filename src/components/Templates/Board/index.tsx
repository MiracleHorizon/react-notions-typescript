import React, { useState } from 'react'

import Banner from '../../../shared/Banner'
import BoardContent from './BoardContent'
import styles from './Board.module.scss'

const Board: React.FC = () => {
  const [isHasCover, setCover] = useState<boolean>(true)

  return (
    <div className={styles.board}>
      {isHasCover && <Banner />}
      <BoardContent />
    </div>
  )
}

export default Board
