import React, { FC, memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { ActiveItem } from 'types'
import Props from './RecentSearchesList.types'
import RecentSearchesItem from '../RecentSearchesItem'
import { clearRecentSearchesList } from 'redux/actions'
import {
  ListWrapper,
  TitleBlock,
  Title,
  ClearButton,
  ClearTitle,
} from '../../../RecentLists.styles'

const RecentSearchesList: FC<Props> = memo(props => {
  const { listTitle, list, activeItem, onSelectActiveItem } = props
  const dispatch = useDispatch()

  const onClearRecentSearchList = useCallback((): void => {
    dispatch(clearRecentSearchesList())
  }, [dispatch])

  return (
    <>
      {list.length > 0 && (
        <ListWrapper>
          <TitleBlock>
            <Title>Recent {listTitle}</Title>
            <ClearButton onClick={onClearRecentSearchList}>
              <ClearTitle>Clear</ClearTitle>
            </ClearButton>
          </TitleBlock>
          <ul>
            {list.map(({ id, title }) => (
              <RecentSearchesItem
                key={id}
                id={id}
                title={title}
                activeItem={activeItem as ActiveItem}
                onSelectActiveItem={onSelectActiveItem}
              />
            ))}
          </ul>
        </ListWrapper>
      )}
    </>
  )
})

export default RecentSearchesList
