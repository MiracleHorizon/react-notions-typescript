import React from 'react'

import SidebarListItem from './ListItem'

import styles from './SidebarList.module.scss'
import { useDispatch } from 'react-redux'
import { setActiveItem } from '../../../redux/sidebarSlice/slice'

interface ISidebarListProps {
  titles: string[]
}

const SidebarList: React.FC<ISidebarListProps> = ({ titles }) => {
  const dispatch = useDispatch()
  const onSelectItem = (i: number): void => {
    dispatch(setActiveItem(i))
  }

  return (
    <div className={styles.root}>
      <ul>
        {titles.map((title, index) => (
          <SidebarListItem
            key={index}
            title={title}
            index={index}
            onSelect={onSelectItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default SidebarList
