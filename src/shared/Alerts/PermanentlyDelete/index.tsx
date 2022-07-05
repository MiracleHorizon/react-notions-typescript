import React, { Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useSelectItem } from 'hooks/useSelectItem'

import Modal from 'shared/ModalWindows/ModalWrapper'
import RedOutlineButton from 'shared/Buttons/Outline/RedOutlineButton'
import GrayOutlineButton from 'shared/Buttons/Outline/GrayOutlineButton'
import { deletePagePermanently } from 'redux/workSpaceSlice/slice'
import { closePermanentlyDeleteAlert } from 'redux/alertsSlice/slice'
import { permanentlyDeleteAlertSelector } from 'redux/alertsSlice/selectors'
import {
  AlertInset,
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
    dispatch(deletePagePermanently(pageId))
    dispatch(closePermanentlyDeleteAlert())
  }
  const onCancelPermanentlyDelete = (): void => {
    dispatch(closePermanentlyDeleteAlert())
  }
  const handleClickOutside = (): void => {
    dispatch(closePermanentlyDeleteAlert())
  }

  useOnClickOutside(alertRef, handleClickOutside)

  return (
    <Modal>
      <Fragment>
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
        <AlertInset />
      </Fragment>
    </Modal>
  )
}

export default PermanentlyDeleteAlert
