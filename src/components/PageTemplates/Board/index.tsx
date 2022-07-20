import React, { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import PageDecorPanel from 'components/Workspace/PageDecorPanel'
import ListContent from './BoardContent'
import EmptyPage from '../EmptyPage'

import { currentPageSelector } from 'redux/selectors'
import { BoardWrapper, BoardContainer, Container } from './BoardTemplate.styles'

const BoardTemplate: FC = memo(() => {
  const {
    content,
    coverInfo: { isHasCover },
    iconInfo: { isHasIcon },
    pageSettings: { isFullWidth },
  } = useSelector(currentPageSelector)

  const isPageEmpty = useCallback((): JSX.Element => {
    return isHasCover || isHasIcon || content.length > 0 ? (
      <ListContent />
    ) : (
      <EmptyPage />
    )
  }, [isHasCover, isHasIcon, content.length])

  return (
    <BoardWrapper>
      <BoardContainer isFullWidth={isFullWidth}>
        <Container>
          <PageDecorPanel />
          {isPageEmpty()}
        </Container>
      </BoardContainer>
    </BoardWrapper>
  )
})

export default BoardTemplate
