import React from 'react'

import { RecentItemProps } from './index'
import styles from './RecentList.module.scss'

const RecentPageItem: React.FC<RecentItemProps> = ({ title, img }) => {
  return (
    <div className={`${styles.item} ${styles.page}`}>
      <img src={img} alt='Page img' />
      <span>{title}</span>
    </div>
  )
}

export default RecentPageItem
