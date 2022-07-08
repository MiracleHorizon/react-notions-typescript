import React from 'react'
import { useDispatch } from 'react-redux'

import RecentPageItem from './RecentPageItem'
import { clearRecentPagesList } from 'redux/quickSearchSlice/slice'
import Props from '../../RecentLists.types'
import { ActiveItem } from 'types'
import {
  ListWrapper,
  TitleBlock,
  Title,
  ClearButton,
  ClearTitle,
} from '../../RecentLists.styles'

const RecentPagesList: React.FC<Props> = props => {
  const { listTitle, list, activeItem, onSelectActiveItem } = props
  const dispatch = useDispatch()

  const onClearRecentPagesList = (): void => {
    dispatch(clearRecentPagesList())
  }

  return (
    <>
      {list.length > 0 && (
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
                {...item}
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

export default RecentPagesList
