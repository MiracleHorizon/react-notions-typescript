import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import RecentPageItem from './RecentPageItem'
import { clearPagesList } from 'redux/recentSearchSlice/slice'
import {
  ListWrapper,
  TitleBlock,
  Title,
  ClearButton,
  ClearTitle,
} from '../RecentLists.styles'

interface IRecentPageItem {
  title: string
  img: string
}

interface RecentPagesListProps {
  listTitle: string
  list: IRecentPageItem[]
}

const RecentPagesList: React.FC<RecentPagesListProps> = props => {
  const { listTitle, list } = props

  const dispatch = useDispatch()
  const onClearList = (): void => {
    dispatch(clearPagesList())
  }

  return (
    <Fragment>
      {list.length > 0 && (
        <ListWrapper>
          <TitleBlock>
            <div>
              <Title>Recent {listTitle}</Title>
            </div>
            <ClearButton role='button' onClick={onClearList}>
              <ClearTitle>Clear</ClearTitle>
            </ClearButton>
          </TitleBlock>
          <ul>
            {list.map(({ title, img }) => (
              <RecentPageItem key={title} title={title} img={img} />
            ))}
          </ul>
        </ListWrapper>
      )}
    </Fragment>
  )
}

export default RecentPagesList
export type { IRecentPageItem }
