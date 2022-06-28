import React from 'react'
import { useDispatch } from 'react-redux'

import RecentSearchesItem from './RecentSearchesItem'
import { clearSearchesList } from '../../../redux/recentSearchSlice/slice'
import styles from './RecentList.module.scss'

interface RecentSearchesListProps {
  listTitle: string
  list: string[]
}

const RecentSearchesList: React.FC<RecentSearchesListProps> = props => {
  const { listTitle, list } = props

  const dispatch = useDispatch()
  const onClearList = (): void => {
    dispatch(clearSearchesList())
  }

  return (
    <React.Fragment>
      {list.length > 0 && (
        <div className={styles.list}>
          <div className={styles.titleBlock}>
            <div className={styles.title}>
              <span>Recent {listTitle}</span>
            </div>
            <div className={styles.clearBtn} onClick={onClearList}>
              <span>Clear</span>
            </div>
          </div>
          <ul>
            {list.map(value => (
              <RecentSearchesItem key={value} title={value} />
            ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  )
}

export default RecentSearchesList
