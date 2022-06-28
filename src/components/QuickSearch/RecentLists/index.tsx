import React from 'react'
import { useSelector } from 'react-redux'

import RecentPagesList from './RecentPagesList'
import RecentSearchesList from './RecentSearchesList'
import HotkeysBar from '../HotkeysBar'
import {
  recentPagesSelector,
  recentSearchesSelector,
} from '../../../redux/recentSearchSlice/selectors'
import styles from '../QuickSearch.module.scss'

const RecentLists: React.FC = () => {
  const recentPages = useSelector(recentPagesSelector)
  const recentSearches = useSelector(recentSearchesSelector)

  const recentListHandler = (): JSX.Element | null => {
    if (!(recentPages.length > 0 || recentSearches.length > 0)) return null

    return <HotkeysBar />
  }

  return (
    <React.Fragment>
      <main className={styles.recent}>
        <RecentPagesList listTitle='pages' list={recentPages} />
        <RecentSearchesList listTitle='searches' list={recentSearches} />
      </main>
      {recentListHandler()}
    </React.Fragment>
  )
}

export default RecentLists
