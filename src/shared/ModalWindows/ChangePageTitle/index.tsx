import React, { FormEvent, lazy, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Modal from '../ModalWrapper'
import EmptyPageIconSVG from 'shared/SVG/EmptyPageIcon'
import CommonGrayInput from 'shared/Inputs/CommonGrayInput'
import { changePageIconPopupSelector } from 'redux/modalsSlice/selectors'
import {
  closeChangePageTitlePopup,
  openChangePageIconPopup,
} from 'redux/modalsSlice/slice'
import { setPageTitle } from 'redux/workSpaceSlice/slice'
import Props from './ChangePageTitlePopup.types'
import {
  PopupContainer,
  IconContainer,
  Icon,
  StyledForm,
} from './ChangePageTitlePopup.styles'
import { headerEmptyPageIconStyles } from 'shared/SVG/EmptyPageIcon/styles'

const ChangePageIconPopup = lazy(() => import('../SwitchIcon'))
//! Лишний рендер из-за Modal

const ChangePageTitlePopup: React.FC<Props> = props => {
  const { id, title, icon, isHasIcon, coords } = props

  const isChangePageIconPopupOpen = useSelector(changePageIconPopupSelector)
  const dispatch = useDispatch()

  const iconRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  const onChangePageTitle = (): void => {
    if (!inputRef.current) return

    const pageTitle = inputRef.current?.value
    dispatch(setPageTitle({ title: pageTitle, id }))
  }
  const onOpenChangePageIconPopup = (): void => {
    dispatch(openChangePageIconPopup())
  }
  const onSubmitPageTitle = (e: FormEvent): void => {
    e.preventDefault()

    dispatch(closeChangePageTitlePopup())
  }
  const handlerClickOutside = (): void => {
    if (!isChangePageIconPopupOpen) dispatch(closeChangePageTitlePopup())
  }

  useEffect(() => inputRef.current?.select(), [])
  useOnClickOutside(popupRef, handlerClickOutside)

  return (
    <>
      <Modal>
        <PopupContainer ref={popupRef} {...{ coords }}>
          <IconContainer ref={iconRef} onClick={onOpenChangePageIconPopup}>
            {isHasIcon ? (
              <Icon src={icon} alt='Page icon' />
            ) : (
              <EmptyPageIconSVG {...headerEmptyPageIconStyles} />
            )}
          </IconContainer>
          <StyledForm onSubmit={onSubmitPageTitle}>
            <CommonGrayInput
              inputRef={inputRef}
              inputValue={title}
              placeholder='Untitled'
              onChange={onChangePageTitle}
            />
          </StyledForm>
        </PopupContainer>
      </Modal>
      {isChangePageIconPopupOpen && <ChangePageIconPopup />}
    </>
  )
}

export default ChangePageTitlePopup
