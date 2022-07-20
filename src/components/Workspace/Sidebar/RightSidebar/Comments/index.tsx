import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useSelector } from 'react-redux'

import { CommentsFilters } from 'redux/reducers/sidebarsSlice/types'
import CommentsList from '../../../PageComments/CommentsList'
import {
  currentPageSelector,
  activeCommentsFilterSelector,
} from 'redux/selectors'
import { ListContainer, ListCreateDateInfo } from './SidebarCommentsList.styles'
import { Content } from '../../Sidebar.styles'

const commentsLists = [{ title: 'Today' }]
const resolvedComments = [{ title: '2 days ago' }]

const SidebarCommentsList: FC = memo(() => {
  const {
    commentsInfo: { comments },
  } = useSelector(currentPageSelector)
  const activeFilter = useSelector(activeCommentsFilterSelector)
  const [activeList, setActiveList] = useState<number | null>(null)

  const commentsList = useMemo(() => {
    return activeFilter === CommentsFilters.OPEN
      ? commentsLists
      : resolvedComments
  }, [activeFilter])

  const onSelectActiveItem = useCallback((index: number) => {
    setActiveList(index)
  }, [])

  useEffect(() => {
    setActiveList(null)
  }, [commentsList])

  return (
    <Content topIndent>
      {/*{commentsList.map(({ title }, itemIndex) => (*/}
      {/*  <ListContainer*/}
      {/*    key={itemIndex}*/}
      {/*    isActive={activeList === itemIndex}*/}
      {/*    onClick={() => onSelectActiveItem(itemIndex)}*/}
      {/*  >*/}
      {/*    <ListCreateDateInfo>{title}</ListCreateDateInfo>*/}
      {/*    <CommentsList comments={comments} />*/}
      {/*  </ListContainer>*/}
      {/*))}*/}
    </Content>
  )
})

export default SidebarCommentsList
