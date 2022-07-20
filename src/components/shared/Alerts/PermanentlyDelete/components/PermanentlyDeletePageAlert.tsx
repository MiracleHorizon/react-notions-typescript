import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useAppDispatch } from 'redux/store'

import Popup from 'components/shared/Popups'
import { RedOutlineButton, GrayOutlineButton } from 'components/ui'

import { useSelectItem } from 'hooks/mouse/useSelectItem'
import { hidePermanentlyDeleteAlert } from 'redux/actions'
import { permanentlyDeleteAlertSelector } from 'redux/selectors'
import {
  Wrapper,
  ButtonsList,
  TitleContainer,
  StyledTitle,
} from '../PermanentlyDeleteAlert.styles'

const PermanentlyDeletePageAlert: FC = memo(() => {
  const { activeItem, onSelectItem } = useSelectItem('Yes. Delete this page')
  const { pageId } = useSelector(permanentlyDeleteAlertSelector)
  const alertRef = useRef<HTMLDivElement>(null)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const onPermanentlyDeletePage = useCallback((): void => {
    // appDispatch(deleteNotionPagePermanently(pageId))
    dispatch(hidePermanentlyDeleteAlert())
  }, [appDispatch, dispatch, pageId])

  const onCancelPermanentlyDelete = useCallback((): void => {
    dispatch(hidePermanentlyDeleteAlert())
  }, [dispatch])

  useOnClickOutside(alertRef, onCancelPermanentlyDelete)

  return (
    <Popup inset>
      <Wrapper ref={alertRef}>
        <TitleContainer>
          <StyledTitle>
            Are you sure you want to delete this page permanently?
          </StyledTitle>
        </TitleContainer>
        <ButtonsList>
          <RedOutlineButton
            title='Yes. Delete this page'
            action={onPermanentlyDeletePage}
            activeItem={activeItem}
            onSelect={onSelectItem}
          />
          <GrayOutlineButton
            title='Cancel'
            action={onCancelPermanentlyDelete}
            activeItem={activeItem}
            onSelect={onSelectItem}
          />
        </ButtonsList>
      </Wrapper>
    </Popup>
  )
})

export default PermanentlyDeletePageAlert
