import React, { FC, memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/store'

import { useSelectActiveItem } from 'hooks/mouse/useSelectActiveItem'
import { ActiveItem } from 'types'
import RecentPagesList from './components/RecentPages/RecentPagesList'
import RecentSearchesList from './components/RecentSearches/RecentSearchesList'
import HotkeysBar from '../HotkeysBar/HotkeysBar'
import { getRecentVisitedPages } from 'redux/actions'
import { recentPagesSelector, recentSearchesSelector } from 'redux/selectors'
import { RecentListsWrapper } from './RecentLists.styles'

const RecentLists: FC = memo(() => {
  const { activeItem, onSelectActiveItem } = useSelectActiveItem({})
  const recentPages = useSelector(recentPagesSelector)
  const recentSearches = useSelector(recentSearchesSelector)
  const appDispatch = useAppDispatch()

  const recentListsHandler = useCallback((): JSX.Element | null => {
    if (!(recentPages.length > 0 || recentSearches.length > 0)) return null

    return <HotkeysBar />
  }, [recentPages.length, recentSearches.length])

  useEffect(() => {
    appDispatch(getRecentVisitedPages())
  }, [appDispatch])

  // lists.map...
  return (
    <>
      <RecentListsWrapper>
        {recentPages.length > 0 && (
          <RecentPagesList
            listTitle='pages'
            list={recentPages}
            activeItem={activeItem as ActiveItem}
            onSelectActiveItem={onSelectActiveItem}
          />
        )}
        {recentSearches.length > 0 && (
          <RecentSearchesList
            listTitle='searches'
            list={recentSearches}
            activeItem={activeItem as ActiveItem}
            onSelectActiveItem={onSelectActiveItem}
          />
        )}
      </RecentListsWrapper>
      {recentListsHandler()}
    </>
  )
})

export default RecentLists
