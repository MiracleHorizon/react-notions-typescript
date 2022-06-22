import React from 'react'

import { IUserBarItem } from '../../../../redux/pagesSlice/types'
import styles from './UserBarItem.module.scss'

const UserBarItem: React.FC<IUserBarItem> = ({ title, imgUrl }) => {
  return (
    <li className={styles.item}>
      <img src={imgUrl} alt='Icon' />
      <span>{title}</span>
    </li>
  )
}

export default UserBarItem
