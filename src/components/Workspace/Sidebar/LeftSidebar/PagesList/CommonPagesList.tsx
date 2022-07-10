import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import { useToggle } from 'hooks/useToggle'
import { useSetTooltipTitle } from 'hooks/useSetTooltipTitle'
import { useCreateNewPage } from 'hooks/useCreateNewPage'
import PagesList from './index'
import PagesListTitle from './ListTitle'
import AddNewPageButton from 'shared/Buttons/AddNewPage'
import Tooltip from 'shared/Tooltips/Tooltip'
import { commonPagesSelector } from 'redux/workSpaceSlice/selectors'
import { Wrapper } from './PagesList.styles'

const CommonPagesList: React.FC = () => {
  const { isOpen, toggleIsOpen } = useToggle(true)
  const commonPages = useSelector(commonPagesSelector)
  const onCreateNewPage = useCreateNewPage()
  const tooltipTitle = useSetTooltipTitle(isOpen)

  const listTitleRef = useRef<HTMLDivElement>(null)
  const isListTitleHovering = useHover(listTitleRef)

  const listRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(listRef)

  return (
    <Wrapper isOpen={isOpen} ref={listRef}>
      <PagesListTitle
        title='Common'
        reference={listTitleRef}
        toggleList={toggleIsOpen}
      />
      {isHovering && (
        <AddNewPageButton
          tooltipTitle='Add a page'
          tooltipDescription='Your regular pages.'
          coords={{ right: '8px', top: '-4px' }}
          onClickAction={onCreateNewPage}
        />
      )}
      {isListTitleHovering && (
        <Tooltip
          title={`Click to ${tooltipTitle} section`}
          description='Your regular pages.'
          coords={{ left: '5px', top: '-50px' }}
        />
      )}
      {isOpen && <PagesList pages={commonPages} />}
    </Wrapper>
  )
}

export default CommonPagesList
