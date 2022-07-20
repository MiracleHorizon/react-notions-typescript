import React, { FC, memo, useCallback, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import PagesList from '../index'
import PagesListTitle from '../ListTitle'
import { AddNewPageButton, PagesListTitleTooltip } from 'components/ui'

import { useAppDispatch } from 'redux/store'
import { useToggle } from 'hooks/mouse/toggle'
import { createNewPage } from 'api/reduxAsyncThunks'
import { commonPagesSelector } from 'redux/selectors'
import tooltipTitleHandler from 'helpers/pages/pagesItemTooltipTitleHandler'
import { ListWrapper } from '../PagesList.styles'

const CommonPagesList: FC = memo(() => {
  const { isActive, toggleActive } = useToggle(true)
  const commonPages = useSelector(commonPagesSelector)
  const appDispatch = useAppDispatch()

  const onCreateNewPage = useCallback((): void => {
    appDispatch(createNewPage({}))
  }, [appDispatch])

  const listRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(listRef)

  const listTitleRef = useRef<HTMLDivElement>(null)
  const isListTitleHovering = useHover(listTitleRef)

  const addNewPageButtonCoords = useMemo(() => {
    return { right: '8px', top: '-4px' }
  }, []) //*

  const tooltipTitle = useMemo(() => {
    return tooltipTitleHandler(isActive)
  }, [isActive])

  return (
    <ListWrapper ref={listRef} isOpen={isActive}>
      <PagesListTitle
        title='Common'
        reference={listTitleRef}
        onToggleList={toggleActive}
      />
      {isHovering && (
        <AddNewPageButton
          tooltipTitle='Add a page'
          tooltipDescription='Your regular pages.'
          coords={addNewPageButtonCoords}
          onClickAction={onCreateNewPage}
        />
      )}
      {isListTitleHovering && (
        <PagesListTitleTooltip
          title={tooltipTitle}
          description='Your regular pages.'
        />
      )}
      {isActive && <PagesList paddingLeft={10} pages={commonPages} />}
    </ListWrapper>
  )
})

export default CommonPagesList
