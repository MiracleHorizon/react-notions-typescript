import React from 'react'
import { useSelector } from 'react-redux'

import RecentPagesList from './RecentPages/RecentPagesList'
import RecentSearchesList from './RecentSearches/RecentSearchesList'
import HotkeysBar from '../HotkeysBar/HotkeysBar'
import {
  recentPagesSelector,
  recentSearchesSelector,
} from 'redux/recentSearchSlice/selectors'
import { RecentListsWrapper } from './RecentLists.styles'

const RecentLists: React.FC = () => {
  const recentPages = useSelector(recentPagesSelector)
  const recentSearches = useSelector(recentSearchesSelector)

  const recentListsHandler = (): JSX.Element | null => {
    if (!(recentPages.length > 0 || recentSearches.length > 0)) return null

    return <HotkeysBar />
  }

  return (
    <React.Fragment>
      <RecentListsWrapper>
        <RecentPagesList listTitle='pages' list={recentPages} />
        <RecentSearchesList listTitle='searches' list={recentSearches} />
      </RecentListsWrapper>
      {recentListsHandler()}
    </React.Fragment>
  )
}

export default RecentLists
