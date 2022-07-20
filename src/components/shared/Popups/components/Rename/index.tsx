import React, {
  FC,
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Popup from '../../index'
import { CommonGrayInput } from 'components/ui'
import { EmptyPageIconSvg } from 'components/ui/SVG'

import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import {
  renamePage,
  closeRenamePopup,
  openChangeIconPopup,
  setChangeIconPopupCoords,
  setChangeIconPopupPage,
} from 'redux/actions'
import { changeIconPopupSelector, renamePopupSelector } from 'redux/selectors'
import { changeIconPopupCoordsHandler } from 'utils/coordsHandlers'
import objectCopier from 'helpers/objectCopier'
import { headerEmptyPageIconStyles } from 'components/ui/SVG/EmptyPageIcon/styles'
import { Wrapper, IconContainer, Icon, StyledForm } from './RenamePopup.styles'

const RenamePopup: FC = memo(() => {
  const { coords, entity } = useSelector(renamePopupSelector)
  const { _id, title, iconInfo } = entity
  const [inputValue, setInputValue] = useState<string>(title)
  const isChangeIconPopupOpen = useSelector(changeIconPopupSelector).isOpen
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const iconRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  const onRenameEntity = useCallback((): void => {
    if (!inputRef.current) return
    const title = inputRef.current.value

    setInputValue(inputRef.current.value)
    dispatch(renamePage({ _id, title }))
  }, [dispatch, _id])

  const onSubmitRenameChanges = useCallback(
    (e: FormEvent): void => {
      e.preventDefault()

      const entityCopy = objectCopier(entity)
      entityCopy.title = inputValue

      dispatch(closeRenamePopup())
      appDispatch(updatePage(entityCopy))
    },
    [appDispatch, dispatch, entity, inputValue]
  )

  const onOpenChangeIconPopup = useCallback((): void => {
    const changeIconPopupCoords = changeIconPopupCoordsHandler.renamePopup(
      iconRef.current?.getBoundingClientRect()
    )

    dispatch(openChangeIconPopup())
    dispatch(setChangeIconPopupPage(entity))
    dispatch(setChangeIconPopupCoords(changeIconPopupCoords))
  }, [dispatch, entity])

  const handleClickOutside = useCallback((): void => {
    if (!isChangeIconPopupOpen) dispatch(closeRenamePopup())
  }, [dispatch, isChangeIconPopupOpen])

  useEffect(() => inputRef.current?.select(), [])

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper ref={popupRef} {...{ coords }}>
        <IconContainer ref={iconRef} onClick={onOpenChangeIconPopup}>
          {iconInfo.isHasIcon ? (
            <Icon src={iconInfo.iconUrl} alt='Page icon' />
          ) : (
            <EmptyPageIconSvg {...headerEmptyPageIconStyles} />
          )}
        </IconContainer>
        <StyledForm onSubmit={onSubmitRenameChanges}>
          <CommonGrayInput
            inputRef={inputRef}
            inputValue={inputValue}
            placeholder='Untitled'
            onChange={onRenameEntity}
          />
        </StyledForm>
      </Wrapper>
    </Popup>
  )
})

export default RenamePopup
