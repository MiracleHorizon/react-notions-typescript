import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { useInput } from 'hooks/useInput'
import EmptyPagesTrash from './EmptyPagesTrash'
import DeletedPagesList from './DeletedPagesList'
import Popup from 'components/Popups/index'
import OutlineInput from 'shared/Inputs/OutlineInput'
import { leftSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { recentlyDeletedPagesSelector } from 'redux/workSpaceSlice/selectors'
import { closePagesTrashPopup } from 'redux/popupsSlice/slice'
import { isPermanentlyDeleteAlertOpenSelector } from 'redux/alertsSlice/selectors'
import { Wrapper, FilterInputContainer } from './PagesTrashPopup.styles'

//* Лишний рендер

const PagesTrashPopup: React.FC = () => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const leftSidebarWidth = useSelector(leftSidebarSelector).width
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
      <Wrapper {...{ leftSidebarWidth }} ref={popupRef}>
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
