import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { useInput } from 'hooks/useInput'
import Props from './PagesTrashPopup.types'
import EmptyPagesTrash from './EmptyPagesTrash'
import DeletedPagesList from './DeletedPagesList'
import Popup from 'components/Popups/index'
import OutlineInput from 'shared/Inputs/OutlineInput'
import { recentlyDeletedPagesSelector } from 'redux/workSpaceSlice/selectors'
import { closePagesTrashPopup } from 'redux/popupsSlice/slice'
import { isPermanentlyDeleteAlertOpenSelector } from 'redux/alertsSlice/selectors'
import { Wrapper, FilterInputContainer } from './PagesTrashPopup.styles'

//* Лишний рендер

const PagesTrashPopup: React.FC<Props> = ({ sidebarWidth }) => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const recentlyDeletedPages = useSelector(recentlyDeletedPagesSelector)
  const isAlertOpen = useSelector(isPermanentlyDeleteAlertOpenSelector)
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleClickOutside = useCallback(() => {
    return !isAlertOpen && dispatch(closePagesTrashPopup())
  }, [dispatch, isAlertOpen])

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper {...{ sidebarWidth }} ref={popupRef}>
        <FilterInputContainer>
          <OutlineInput
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
}

export default PagesTrashPopup
