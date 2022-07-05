import React, { Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInput } from 'hooks/useInput/useInput'
import { useSelectItem } from 'hooks/useSelectItem'
import { useOnClickOutside } from 'usehooks-ts'

import EmptyPagesTrash from './EmptyPagesTrash'
import DeletedPagesList from './DeletedPagesList'
import Modal from 'shared/ModalWindows/ModalWrapper'
import OutlineInput from 'shared/Inputs/OutlineInput'
import PermanentlyDeleteAlert from 'shared/Alerts/PermanentlyDelete'
import { recentlyDeletedPagesSelector } from 'redux/workSpaceSlice/selectors'
import { closePagesTrashModal } from 'redux/modalsSlice/slice'
import { permanentlyDeleteAlertSelector } from 'redux/alertsSlice/selectors'
import { PagesTrashPopupProps as Props } from './PagesTrashPopup.types'
import { StyledPopup, FilterInputContainer } from './PagesTrashPopup.styles'

//* Лишний рендер

const PagesTrashPopup: React.FC<Props> = ({ sidebarWidth }) => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const { activeItem, onSelectItem } = useSelectItem('')
  const recentlyDeletedPages = useSelector(recentlyDeletedPagesSelector)
  const isAlertOpen = useSelector(permanentlyDeleteAlertSelector).isOpen
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleClickOutside = (): void => {
    if (!isAlertOpen) dispatch(closePagesTrashModal())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Fragment>
      <Modal>
        <StyledPopup {...{ sidebarWidth }} ref={popupRef}>
          <FilterInputContainer>
            <OutlineInput
              placeholder='Filter by page title'
              inputValue={inputValue}
              onChange={onChangeInputValue}
              onClear={onClearInput}
            />
          </FilterInputContainer>
          {recentlyDeletedPages.length > 0 ? (
            <DeletedPagesList
              list={recentlyDeletedPages}
              activeItem={activeItem}
              onSelect={onSelectItem}
            />
          ) : (
            <EmptyPagesTrash />
          )}
        </StyledPopup>
      </Modal>
      {isAlertOpen && <PermanentlyDeleteAlert />}
    </Fragment>
  )
}

export default PagesTrashPopup
