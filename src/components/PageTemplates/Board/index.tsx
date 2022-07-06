import React from 'react'
import { useSelector } from 'react-redux'
// import { useEventListener } from 'usehooks-ts'
// import { useKeyboardBind } from 'hooks/useKeyboardBind/useKeyboardBind'

import PageContentOptions from '../../Workspace/PageContentOptions'
import BoardContent from './BoardContent'
import EmptyPage from '../EmptyPage'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
// import { toggleFullWidth } from 'redux/workSpaceSlice/slice'
import { BoardWrapper, Container } from './BoardTemplate.styles'

const BoardTemplate: React.FC = () => {
  const {
    id,
    coverInfo: { isHasCover },
    iconInfo: { isHasIcon },
    pageSettings: { isFullWidth },
  } = useSelector(currentPageSelector)

  const isPageEmpty = (): JSX.Element => {
    return isHasCover || isHasIcon ? <BoardContent /> : <EmptyPage />
  }

  // const onKeydownToggleFullWidth = useKeyboardBind({
  //   keyboardCode: 'Backslash',
  //   shiftKey: true,
  //   ctrlKey: true,
  //   action: toggleFullWidth(id),
  // })
  //
  // useEventListener('keydown', onKeydownToggleFullWidth!)
  // isFullWidth, isHasIcon, isHasCover, content || content

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
