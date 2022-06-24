import React from 'react'
import { useSelector } from 'react-redux'

import UserBarItem from './UserBarItem'
import { userBarItemsSelector } from '../../../redux/pagesSlice/selectors'
import styles from './UserBar.module.scss'

const UserBar: React.FC = () => {
  const userBarItems = useSelector(userBarItemsSelector)

  return (
    <div className={styles.userBar}>
      <ul>
        {userBarItems.map(({ title, imgUrl }) => (
          <UserBarItem key={title} title={title} imgUrl={imgUrl} />
        ))}
      </ul>
    </div>
  )
}

export default UserBar
