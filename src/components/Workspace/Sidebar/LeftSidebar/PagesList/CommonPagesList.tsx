import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useToggle } from 'hooks/useToggle'
import { useTooltipTitle } from 'hooks/useTooltipTitle'
import { useCreateNewPage } from 'hooks/useCreateNewPage'

import PagesList from './PagesList'
import ListTitle from './ListTitle/ListTitle'
import AddNewPageButton from 'shared/Buttons/AddNewPage/AddNewPageButton'
import Tooltip from 'shared/Tooltip/Tooltip'
import {
  commonPagesSelector,
  currentPageSelector,
} from 'redux/workSpaceSlice/selectors'
import { Wrapper } from './PagesList.styles'

const CommonPagesList: React.FC = () => {
  const { isOpen, toggleIsOpen } = useToggle(true)
  const { id } = useSelector(currentPageSelector)
  const tooltipTitle = useTooltipTitle(isOpen)
  const commonPages = useSelector(commonPagesSelector)
  const onCreateNewPage = useCreateNewPage(id!)

  const listTitleRef = useRef<HTMLDivElement>(null)
  const isListTitleHovering = useHover(listTitleRef)

  const listRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(listRef)

  return (
    <Wrapper ref={listRef}>
      <ListTitle
        title='Common'
        reference={listTitleRef}
        toggleList={toggleIsOpen}
      />
      {isHovering && (
        <AddNewPageButton
          tooltipTitle='Add a page'
          tooltipDescription='Your regular pages.'
          coords={{ right: '8px', top: '-4px' }}
          action={onCreateNewPage}
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
