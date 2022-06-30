import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import RecentSearchesItem from './RecentSearchesItem'
import { clearSearchesList } from 'redux/recentSearchSlice/slice'

import {
  ListWrapper,
  TitleBlock,
  Title,
  ClearButton,
  ClearTitle,
} from '../RecentLists.styles'

interface RecentSearchesListProps {
  listTitle: string
  list: string[]
}

const RecentSearchesList: React.FC<RecentSearchesListProps> = props => {
  const { listTitle, list } = props

  const dispatch = useDispatch()
  const onClearList = (): void => {
    dispatch(clearSearchesList())
  }

  return (
    <Fragment>
      {list.length > 0 && (
        <ListWrapper>
          <TitleBlock>
            <div>
              <Title>Recent {listTitle}</Title>
            </div>
            <ClearButton onClick={onClearList}>
              <ClearTitle>Clear</ClearTitle>
            </ClearButton>
          </TitleBlock>
          <ul>
            {list.map(value => (
              <RecentSearchesItem key={value} title={value} />
            ))}
          </ul>
        </ListWrapper>
      )}
    </Fragment>
  )
}

export default RecentSearchesList
