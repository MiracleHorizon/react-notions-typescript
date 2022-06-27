import React from 'react'

import { RecentItemProps } from './index'
import styles from './RecentList.module.scss'
import searchSvg from '../../../assets/img/search.svg'

const RecentSearchesItem: React.FC<RecentItemProps> = ({ title }) => {
  return (
    <div className={`${styles.item} ${styles.searches}`}>
      <img src={searchSvg} alt='Search' />
      <span>{title}</span>
    </div>
  )
}

export default RecentSearchesItem
