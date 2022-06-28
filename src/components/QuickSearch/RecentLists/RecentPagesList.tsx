import React from 'react'
import { useDispatch } from 'react-redux'

import RecentPageItem from './RecentPageItem'
import { clearPagesList } from '../../../redux/recentSearchSlice/slice'
import styles from './RecentList.module.scss'

interface IRecentPageItem {
  title: string
  img: string
}

interface RecentPagesListProps {
  listTitle: string
  list: IRecentPageItem[]
}

const RecentPagesList: React.FC<RecentPagesListProps> = props => {
  const { listTitle, list } = props

  const dispatch = useDispatch()
  const onClearList = (): void => {
    dispatch(clearPagesList())
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
            {list.map(({ title, img }) => (
              <RecentPageItem key={title} title={title} img={img} />
            ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  )
}

export default RecentPagesList
export type { IRecentPageItem }
