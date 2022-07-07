import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { useInput } from 'hooks/useInput'
import { useSelectActiveItem } from 'hooks/useSelectActiveItem'
import EmptyPagesTrash from './EmptyPagesTrash'
import DeletedPagesList from './DeletedPagesList'
import Modal from 'components/Popups/ModalWrapper'
import OutlineInput from 'shared/Inputs/OutlineInput'
import PermanentlyDeleteAlert from 'shared/Alerts/PermanentlyDelete'
import { recentlyDeletedPagesSelector } from 'redux/workSpaceSlice/selectors'
import { closePagesTrashModal } from 'redux/popupsSlice/slice'
import { permanentlyDeleteAlertSelector } from 'redux/alertsSlice/selectors'
import { PagesTrashPopupProps as Props } from './PagesTrashPopup.types'
import { ActiveItem } from '../../../@types/generalTypes'
import { StyledPopup, FilterInputContainer } from './PagesTrashPopup.styles'

//* Лишний рендер

const PagesTrashPopup: React.FC<Props> = ({ sidebarWidth }) => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const { activeItem, onSelectActiveItem } = useSelectActiveItem({})
  const recentlyDeletedPages = useSelector(recentlyDeletedPagesSelector)
  const isAlertOpen = useSelector(permanentlyDeleteAlertSelector).isOpen
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleClickOutside = (): void => {
    if (!isAlertOpen) dispatch(closePagesTrashModal())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <>
      <Modal>
        <StyledPopup {...{ sidebarWidth }} ref={popupRef}>
          <FilterInputContainer>
            <OutlineInput
              placeholder='Filter by page optionsTitle'
              inputValue={inputValue}
              onChange={onChangeInputValue}
              onClear={onClearInput}
            />
          </FilterInputContainer>
          {recentlyDeletedPages.length > 0 ? (
            <DeletedPagesList
              list={recentlyDeletedPages}
              activeItem={activeItem as ActiveItem}
              onSelectActiveItem={onSelectActiveItem}
            />
          ) : (
            <EmptyPagesTrash />
          )}
        </StyledPopup>
      </Modal>
      {isAlertOpen && <PermanentlyDeleteAlert />}
    </>
  )
}

export default PagesTrashPopup
