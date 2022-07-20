import React, { FC, memo, useCallback, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import PagesList from '../index'
import PagesListItemIcon from './ItemIcon'
import PageItemOptions from './ItemOptions'
import EmptyItemDependencies from './EmptyDependencies'
import { TriangleSvg } from 'components/ui/SVG'

import Props from './ListItem.types'
import { useAppDispatch } from 'redux/store'
import { getPage, updatePage } from 'api/reduxAsyncThunks'
import {
  closeRightSidebar,
  setSelectedPage,
  openPageOptionsPopup,
  setPageOptionsPopupCoords,
  setPageOptionsPage,
} from 'redux/actions'
import {
  currentPageSelector,
  pagesSelector,
  selectedPageSelector,
} from 'redux/selectors'
import selectedItemHandler from 'helpers/selectedItemHandler'
import setCoordsByPointer from 'helpers/coords/setCoordsByPointer'
import objectCopier from 'helpers/objectCopier'
import {
  ItemWrapper,
  ItemContainer,
  InformationContainer,
  Title,
} from './ListItem.styles'
import ToggleButton from '../../../../../ui/Buttons/ToggleButton'

const PagesListItem: FC<Props> = memo(({ page, paddingLeft }) => {
  const {
    _id,
    title,
    pageSettings: { isExpanded },
  } = page
  const { _id: currentPageId } = useSelector(currentPageSelector)
  const dependentPages = useSelector(pagesSelector).filter(
    page => page.parentPageId === _id
  ) //!
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const itemRef = useRef<HTMLLIElement>(null)
  const isHovering = useHover(itemRef)

  const selectedPage = useSelector(selectedPageSelector)
  const isSelected = useMemo(() => {
    return selectedItemHandler({
      activeItem: selectedPage,
      item: { id: _id, title },
    })
  }, [selectedPage, _id, title])

  const toggleExpanded = useCallback((): void => {
    const pageCopy = objectCopier(page)

    pageCopy.pageSettings.isExpanded = !pageCopy.pageSettings.isExpanded
    appDispatch(updatePage(pageCopy))
  }, [appDispatch, page])

  const onSelectCurrentPage = useCallback((): void => {
    if (_id !== currentPageId) {
      appDispatch(getPage(_id))
      dispatch(setSelectedPage({ title, id: _id })) //!
      dispatch(closeRightSidebar())
      // dispatch(setCurrentPage(_id))
    }
    // Тут будет пост запрос.
  }, [appDispatch, dispatch, _id, currentPageId, title])

  const onOpenPageOptionsPopup = useCallback(
    (e: React.MouseEvent): void => {
      e.preventDefault()

      dispatch(openPageOptionsPopup())
      dispatch(setPageOptionsPage(page))
      dispatch(setPageOptionsPopupCoords(setCoordsByPointer(e)))
    },
    [dispatch, page]
  )

  const dependenceHandler = useCallback((): JSX.Element | null => {
    if (isExpanded && dependentPages.length > 0) {
      return <PagesList paddingLeft={paddingLeft + 14} pages={dependentPages} />
    }

    if (isExpanded && dependentPages.length === 0) {
      return <EmptyItemDependencies paddingLeft={paddingLeft + 17} />
    }

    return null
  }, [dependentPages, isExpanded, paddingLeft])

  return (
    <ItemWrapper>
      <ItemContainer
        draggable
        ref={itemRef}
        onClick={onSelectCurrentPage}
        onContextMenu={onOpenPageOptionsPopup}
        {...{ paddingLeft, isSelected, isHovering, isExpanded }}
      >
        <ToggleButton isExpanded={isExpanded} toggleExpanded={toggleExpanded} />
        <InformationContainer>
          <PagesListItemIcon {...page} />
          <Title isSelected={isSelected}>{title}</Title>
        </InformationContainer>
        {isHovering && <PageItemOptions {...page} />}
      </ItemContainer>
      {dependenceHandler()}
    </ItemWrapper>
  )
})

export default PagesListItem
