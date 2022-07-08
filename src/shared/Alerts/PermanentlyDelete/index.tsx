import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useSelectItem } from 'hooks/useSelectItem'

import Popup from 'components/Popups'
import RedOutlineButton from 'shared/Buttons/Outline/components/RedOutlineButton'
import GrayOutlineButton from 'shared/Buttons/Outline/components/GrayOutlineButton'
import { deletePagePermanently } from 'redux/workSpaceSlice/slice'
import { hidePermanentlyDeleteAlert } from 'redux/alertsSlice/slice'
import { permanentlyDeleteAlertSelector } from 'redux/alertsSlice/selectors'
import {
  AlertWrapper,
  ButtonsList,
  TitleContainer,
  StyledTitle,
} from './PermanentlyDeleteAlert.styles'

const PermanentlyDeleteAlert: React.FC = () => {
  const { activeItem, onSelectItem } = useSelectItem('Yes. Delete this page')
  const { pageId } = useSelector(permanentlyDeleteAlertSelector)
  const alertRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onPermanentlyDeletePage = (): void => {
    dispatch(deletePagePermanently(pageId!))
    dispatch(hidePermanentlyDeleteAlert())
  }
  const onCancelPermanentlyDelete = (): void => {
    dispatch(hidePermanentlyDeleteAlert())
  }
  const handleClickOutside = (): void => {
    dispatch(hidePermanentlyDeleteAlert())
  }

  useOnClickOutside(alertRef, handleClickOutside)

  return (
    <Popup isHasInset={true}>
      <AlertWrapper ref={alertRef}>
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
      </AlertWrapper>
    </Popup>
  )
}

export default PermanentlyDeleteAlert
