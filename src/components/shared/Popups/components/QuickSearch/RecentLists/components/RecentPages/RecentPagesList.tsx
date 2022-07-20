import React, { FC, memo, useCallback } from 'react'
import { useAppDispatch } from 'redux/store'

import { ActiveItem } from 'types'
import RecentPageItem from './RecentPageItem'
import Props from '../../RecentLists.types'
import { clearRecentVisitedPages, getRecentVisitedPages } from 'redux/actions'
import {
  ListWrapper,
  TitleBlock,
  Title,
  ClearButton,
  ClearTitle,
} from '../../RecentLists.styles'

const RecentPagesList: FC<Props> = memo(
  ({ listTitle, list, activeItem, onSelectActiveItem }) => {
    const appDispatch = useAppDispatch()

    const onClearRecentPagesList = useCallback((): void => {
      appDispatch(clearRecentVisitedPages())
      appDispatch(getRecentVisitedPages)
    }, [appDispatch])

    return (
      <ListWrapper>
        <TitleBlock>
          <Title>Recent {listTitle}</Title>
          <ClearButton role='button' onClick={onClearRecentPagesList}>
            <ClearTitle>Clear</ClearTitle>
          </ClearButton>
        </TitleBlock>
        <ul>
          {list.map(item => (
            <RecentPageItem
              key={item.id}
              activeItem={activeItem as ActiveItem}
              onSelectActiveItem={onSelectActiveItem}
              {...item}
            />
          ))}
        </ul>
      </ListWrapper>
    )
  }
)

export default RecentPagesList
