import React from 'react'
import { useSelector } from 'react-redux'

import OptionItem from '../../OptionsList/OptionItem'
import { userBarOptionsSelector } from '../../../redux/optionsSlice/selectors'
import styles from './UserBar.module.scss'

const UserBar: React.FC = () => {
  const userBarOptions = useSelector(userBarOptionsSelector)

  return (
    <div className={styles.userBar}>
      <ul>
        {userBarOptions.map(option => (
          <OptionItem
            key={option.title}
            option={option}
            className={'userBar'}
          />
        ))}
      </ul>
    </div>
  )
}

export default UserBar
