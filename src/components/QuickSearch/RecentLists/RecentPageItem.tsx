import React from 'react'

import { IRecentPageItem } from './RecentPagesList'
import styles from './RecentList.module.scss'

const RecentPageItem: React.FC<IRecentPageItem> = ({ title, img }) => {
  return (
    <div className={`${styles.item} ${styles.page}`}>
      <img src={img} alt='Page img' />
      <span>{title}</span>
    </div>
  )
}

export default RecentPageItem
