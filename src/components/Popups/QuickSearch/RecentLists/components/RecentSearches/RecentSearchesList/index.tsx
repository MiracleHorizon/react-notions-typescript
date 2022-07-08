import React from 'react'
import { useDispatch } from 'react-redux'

import RecentSearchesItem from '../RecentSearchesItem'
import { clearRecentSearchesList } from 'redux/quickSearchSlice/slice'
import Props from './RecentSearchesList.types'
import {
  ListWrapper,
  TitleBlock,
  Title,
  ClearButton,
  ClearTitle,
} from '../../../RecentLists.styles'
import { ActiveItem } from 'types'

const RecentSearchesList: React.FC<Props> = props => {
  const { listTitle, list, activeItem, onSelectActiveItem } = props
  const dispatch = useDispatch()

  const onClearRecentSearchList = (): void => {
    dispatch(clearRecentSearchesList())
  }

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
}

export default RecentSearchesList
