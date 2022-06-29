import React from 'react'

import styles from './RecentList.module.scss'
import searchSvg from '../../../assets/img/inputs/search.svg'

interface RecentSearchesItemProps {
  title: string
}

const RecentSearchesItem: React.FC<RecentSearchesItemProps> = ({ title }) => {
  return (
    <div className={`${styles.item} ${styles.searches}`}>
      <img src={searchSvg} alt='Search' />
      <span>{title}</span>
    </div>
  )
}

export default RecentSearchesItem
