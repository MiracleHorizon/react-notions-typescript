import React from 'react'
import { useSelector } from 'react-redux'

import { useSelectActiveItem } from 'hooks/useSelectActiveItem'
import RecentPagesList from './components/RecentPages/RecentPagesList'
import RecentSearchesList from './components/RecentSearches/RecentSearchesList'
import HotkeysBar from '../HotkeysBar/HotkeysBar'
import {
  recentPagesSelector,
  recentSearchesSelector,
} from 'redux/quickSearchSlice/selectors'
import { ActiveItem } from 'types'
import { RecentListsWrapper } from './RecentLists.styles'

const RecentLists: React.FC = () => {
  const recentPages = useSelector(recentPagesSelector)
  const recentSearches = useSelector(recentSearchesSelector)
  const { activeItem, onSelectActiveItem } = useSelectActiveItem({})

  const recentListsHandler = (): JSX.Element | null => {
    if (!(recentPages.length > 0 || recentSearches.length > 0)) return null

    return <HotkeysBar />
  }

  // lists.map...

  return (
    <>
      <RecentListsWrapper>
        <RecentPagesList
          listTitle='pages'
          list={recentPages}
          activeItem={activeItem as ActiveItem}
          onSelectActiveItem={onSelectActiveItem}
        />
        <RecentSearchesList
          listTitle='searches'
          list={recentSearches}
          activeItem={activeItem as ActiveItem}
          onSelectActiveItem={onSelectActiveItem}
        />
      </RecentListsWrapper>
      {recentListsHandler()}
    </>
  )
}

export default RecentLists
