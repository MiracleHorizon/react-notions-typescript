import React, { useEffect, useState } from 'react'

import { RecentList } from '../../../redux/recentSearchSlice/types'
import styles from './RecentList.module.scss'
import RecentPageItem from './RecentPageItem'
import RecentSearchesItem from './RecentSearchesItem'
import { useDispatch } from 'react-redux'
import {
  clearPagesList,
  clearSearchesList,
} from '../../../redux/recentSearchSlice/slice'

interface SearchListProps {
  listTitle: string
  list: RecentList
}

interface RecentItemProps {
  title: string
  img?: string
}

const RecentSearchList: React.FC<SearchListProps> = ({ listTitle, list }) => {
  // const [activeItem, setActiveItem] = useState()|
  const [recentList, setRecentList] = useState<RecentList>([])

  const dispatch = useDispatch()
  const onClearList = (): void => {
    listTitle === 'pages'
      ? dispatch(clearPagesList())
      : dispatch(clearSearchesList())
  }

  useEffect(() => {
    setRecentList(list)
  }, [list])

  return (
    <React.Fragment>
      {recentList.length > 0 && (
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
            {listTitle === 'pages'
              ? recentList.map(({ title, img }) => (
                  <RecentPageItem key={title} title={title} img={img} />
                ))
              : recentList.map(({ title }) => (
                  <RecentSearchesItem key={title} title={title} />
                ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  )
}

export default RecentSearchList
export type { RecentItemProps }
