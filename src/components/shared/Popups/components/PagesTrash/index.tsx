import React, { FC, memo, useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useAppDispatch } from 'redux/store'

import EmptyPagesTrash from './EmptyPagesTrash'
import DeletedPagesList from './DeletedPagesList'
import Popup from 'components/shared/Popups/index'
import { OutlineInput } from 'components/ui'

import { useInput } from 'hooks/keyboard/input'
import { closePagesTrashPopup } from 'redux/actions'
import {
  leftSidebarStateSelector,
  isDeleteAlertOpenSelector,
  recentlyDeletedPagesSelector,
} from 'redux/selectors'
import { Wrapper, FilterInputContainer } from './PagesTrashPopup.styles'

const PagesTrashPopup: FC = memo(() => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const leftSidebarWidth = useSelector(leftSidebarStateSelector).width
  const recentlyDeletedPages = useSelector(recentlyDeletedPagesSelector)
  const isAlertOpen = useSelector(isDeleteAlertOpenSelector)
  const popupRef = useRef<HTMLDivElement>(null)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const handleClickOutside = useCallback(() => {
    return !isAlertOpen && dispatch(closePagesTrashPopup())
  }, [dispatch, isAlertOpen])

  useEffect(() => {
    // appDispatch(getRecentDeletedPages())
  }, [appDispatch])

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper leftSidebarWidth={leftSidebarWidth} ref={popupRef}>
        <FilterInputContainer>
          <OutlineInput
            renderFocusable
            placeholder='Filter by page title...'
            inputValue={inputValue}
            onChange={onChangeInputValue}
            onClear={onClearInput}
          />
        </FilterInputContainer>
        {recentlyDeletedPages.length > 0 ? (
          <DeletedPagesList list={recentlyDeletedPages} />
        ) : (
          <EmptyPagesTrash />
        )}
      </Wrapper>
    </Popup>
  )
})

export default PagesTrashPopup
