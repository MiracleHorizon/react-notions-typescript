import React, { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import PagesListItem from './ListItem'
import { PagesListSkeleton } from 'components/ui'

import Props from './PagesList.types'
import { LoadingStatuses } from 'api/types'
import {
  leftSidebarStateSelector,
  pagesLoadingStatusSelector,
} from 'redux/selectors'
import { ListContainer, List, SkeletonContainer } from './PagesList.styles'

const PagesList: FC<Props> = memo(({ pages, paddingLeft }) => {
  const pagesLoadingStatus = useSelector(pagesLoadingStatusSelector)
  const leftSidebarWidth = useSelector(leftSidebarStateSelector).width

  const pagesListItemsHandler = useCallback((): JSX.Element | JSX.Element[] => {
    if (!Array.isArray(pages))
      return <PagesListItem paddingLeft={paddingLeft} page={pages} /> //!

    return pages.map(page => (
      <PagesListItem paddingLeft={paddingLeft} key={page._id} page={page} />
    ))
  }, [paddingLeft, pages])

  return (
    <ListContainer>
      {pagesLoadingStatus === LoadingStatuses.SUCCEEDED ? (
        <List>{pagesListItemsHandler()}</List>
      ) : (
        <SkeletonContainer>
          <PagesListSkeleton sidebarWidth={leftSidebarWidth} />
        </SkeletonContainer>
      )}
    </ListContainer>
  )
})

export default PagesList
