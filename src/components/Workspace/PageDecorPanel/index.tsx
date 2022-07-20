import React, { FC, memo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import PageIcon from './PageIcon'
import {
  AddRandomIconButton,
  AddRandomCoverButton,
  AddFirstCommentButton,
} from 'components/ui'

import { currentPageSelector } from 'redux/selectors'
import { PanelWrapper, OptionsContainer } from './PageDecorOptions.styles'

const PageDecorPanel: FC = memo(() => {
  const {
    iconInfo: { isHasIcon },
    coverInfo: { isHasCover },
    commentsInfo: { isHasComments },
  } = useSelector(currentPageSelector)

  const panelRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(panelRef)

  return (
    <PanelWrapper ref={panelRef} isHasCover={isHasCover}>
      {isHasIcon && <PageIcon />}
      <OptionsContainer isHovering={isHovering}>
        {!isHasIcon && <AddRandomIconButton />}
        {!isHasCover && <AddRandomCoverButton />}
        {!isHasComments && <AddFirstCommentButton />}
      </OptionsContainer>
    </PanelWrapper>
  )
})

export default PageDecorPanel
