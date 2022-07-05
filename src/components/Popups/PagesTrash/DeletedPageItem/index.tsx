import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'

import Tooltip from 'shared/Tooltip'
import { DeleteTrashSvg, EmptyPageIconSvg, UndoSvg } from 'shared/SVG'
import { restorePage } from 'redux/workSpaceSlice/slice'
import {
  openPermanentlyDeleteAlert,
  setPermanentlyDeleteAlertPage,
} from 'redux/alertsSlice/slice'
import Props from './DeletedPageItem.types'
import { ElementCoords } from '../../../../@types/generalTypes'
import {
  StyledItem,
  TitlesBlock,
  Title,
  ParentTitle,
  Icon,
  ButtonsContainer,
  StyledButton,
} from './DeletedPageItem.styles'

const DeletedPageItem: React.FC<Props> = props => {
  const { id, icon, title, parentTitle, activeItem, onSelect } = props
  const isActive = activeItem === title
  const tooltipCoords: ElementCoords = { top: '30px' } //*
  const dispatch = useDispatch()

  const restoreButtonRef = useRef<HTMLDivElement>(null)
  const isRestoreButtonHovering = useHover(restoreButtonRef)

  const deleteButtonRef = useRef<HTMLDivElement>(null)
  const isDeleteButtonHovering = useHover(deleteButtonRef)

  const onRestorePage = (): void => {
    dispatch(restorePage(id))
  }
  const onOpenPermanentlyDeleteAlert = (): void => {
    dispatch(openPermanentlyDeleteAlert())
    dispatch(setPermanentlyDeleteAlertPage(id))
  }

  return (
    <StyledItem {...{ isActive }} onMouseEnter={() => onSelect(title)}>
      {icon ? (
        <Icon src={icon} alt='Icon' />
      ) : (
        <EmptyPageIconSvg {...{ sizes: { width: 17, height: 17 } }} />
      )}
      <TitlesBlock>
        <Title>{title}</Title>
        {parentTitle && <ParentTitle>{parentTitle}</ParentTitle>}
      </TitlesBlock>
      <ButtonsContainer>
        <StyledButton
          transparent
          ref={restoreButtonRef}
          onClick={onRestorePage}
        >
          <UndoSvg />
          {isRestoreButtonHovering && (
            <Tooltip title='Restore' coords={tooltipCoords} />
          )}
        </StyledButton>
        <StyledButton
          ref={deleteButtonRef}
          onClick={onOpenPermanentlyDeleteAlert}
        >
          <DeleteTrashSvg {...{ sizes: { width: 18, height: 18 } }} />
          {isDeleteButtonHovering && (
            <Tooltip title='Delete permanently' coords={tooltipCoords} />
          )}
        </StyledButton>
      </ButtonsContainer>
    </StyledItem>
  )
}

export default DeletedPageItem
