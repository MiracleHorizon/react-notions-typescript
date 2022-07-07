import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Modal from '../ModalWrapper'
import EmptyPageIconSVG from 'shared/SVG/EmptyPageIcon'
import CommonGrayInput from 'shared/Inputs/CommonGrayInput'
import {
  changeIconPopupSelector,
  renamePopupSelector,
} from 'redux/popupsSlice/selectors'
import {
  closeRenamePopup,
  openChangeIconPopup,
  setChangeIconPopupCoords,
} from 'redux/popupsSlice/slice'
import { setPageTitle } from 'redux/workSpaceSlice/slice'
import { changeIconPopupCoordsHandler } from 'utils/coordsHandlers'
import { headerEmptyPageIconStyles } from 'shared/SVG/EmptyPageIcon/styles'
import { Wrapper, IconContainer, Icon, StyledForm } from './RenamePopup.styles'

//! Лишний рендер из-за Modal
const RenamePopup: React.FC = () => {
  const { coords, essence } = useSelector(renamePopupSelector)
  const { id, title, iconInfo } = essence
  const [inputValue, setInputValue] = useState<string>(title)
  const isChangeIconPopupOpen = useSelector(changeIconPopupSelector).isOpen
  const dispatch = useDispatch()

  const iconRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  const onRenameEssence = (): void => {
    if (!inputRef.current) return

    setInputValue(inputRef.current.value)
    dispatch(setPageTitle({ title: inputRef.current.value, id }))
    // Тут будет пост запрос
  }
  const onOpenChangeIconPopup = (): void => {
    const iconRect = iconRef.current?.getBoundingClientRect()
    const changeIconPopupCoords =
      changeIconPopupCoordsHandler.setCoordsByRenamePopup(iconRect)

    dispatch(openChangeIconPopup())
    dispatch(setChangeIconPopupCoords(changeIconPopupCoords))
  }
  const onSubmitRenameChanges = (e: FormEvent): void => {
    e.preventDefault()

    // Тут будет пост запрос
    dispatch(closeRenamePopup())
  }
  const handlerClickOutside = (): void => {
    if (!isChangeIconPopupOpen) {
      dispatch(closeRenamePopup())
      // Тут будет пост запрос
    }
  }

  useEffect(() => inputRef.current?.select(), [])
  useOnClickOutside(popupRef, handlerClickOutside)

  return (
    <Modal>
      <Wrapper ref={popupRef} {...{ coords }}>
        <IconContainer ref={iconRef} onClick={onOpenChangeIconPopup}>
          {iconInfo.isHasIcon ? (
            <Icon src={iconInfo.icon} alt='Page icon' />
          ) : (
            <EmptyPageIconSVG {...headerEmptyPageIconStyles} />
          )}
        </IconContainer>
        <StyledForm onSubmit={onSubmitRenameChanges}>
          <CommonGrayInput
            inputRef={inputRef}
            inputValue={inputValue}
            placeholder='Untitled'
            onChange={onRenameEssence}
          />
        </StyledForm>
      </Wrapper>
    </Modal>
  )
}

export default RenamePopup
