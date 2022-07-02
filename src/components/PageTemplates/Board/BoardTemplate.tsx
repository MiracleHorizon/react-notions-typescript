import React from 'react'
import { useSelector } from 'react-redux'

import PageContentOptions from '../../Workspace/PageContentOptions/PageContentOptions'
import BoardContent from './BoardContent/BoardContent'
import EmptyPage from '../EmptyPage/EmptyPage'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { BoardWrapper, Container } from './BoardTemplate.styles'

const BoardTemplate: React.FC = () => {
  const { isFullWidth, isHasIcon, isHasCover, content } =
    useSelector(currentPageSelector)

  const isPageEmpty = (): JSX.Element => {
    return isHasCover || isHasIcon || content ? <BoardContent /> : <EmptyPage />
  }

  return (
    <BoardWrapper>
      <Container {...{ isFullWidth }}>
        <PageContentOptions />
        {isPageEmpty()}
      </Container>
    </BoardWrapper>
  )
}

export default BoardTemplate
