import React, { FC, memo, useCallback, useMemo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useAppDispatch } from 'redux/store'

import { BlackFilledTooltip } from 'components/ui'
import { DeleteTrashSvg, EmptyPageIconSvg, UndoSvg } from 'components/ui/SVG'

import Props from './DeletedPageItem.types'
import {
  showPermanentlyDeleteAlert,
  setPermanentlyDeleteAlertPage,
} from 'redux/actions'
import selectedItemHandler from 'helpers/selectedItemHandler'
import { tooltipsCoordsList } from 'components/ui/Tooltips/BlackFilledTooltip/BlackFilledTooltip.coords'
import {
  StyledItem,
  TitlesBlock,
  Title,
  ParentTitle,
  Icon,
  ButtonsContainer,
  StyledButton,
} from './DeletedPageItem.styles'

const DeletedPageItem: FC<Props> = memo(props => {
  const { id, icon, title, parentTitle, activeItem, onSelectActiveItem } = props
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const isActive = useMemo(() => {
    return selectedItemHandler({ activeItem, item: { id, title } })
  }, [activeItem, id, title])
  const tooltipCoords = useMemo(() => tooltipsCoordsList['pages-trash'], [])

  const restoreButtonRef = useRef<HTMLDivElement>(null)
  const isRestoreButtonHovering = useHover(restoreButtonRef)

  const deleteButtonRef = useRef<HTMLDivElement>(null)
  const isDeleteButtonHovering = useHover(deleteButtonRef)

  const onRestorePage = useCallback((): void => {
    // appDispatch(restoreNotionPage(id))
  }, [appDispatch, id])

  const onOpenPermanentlyDeleteAlert = useCallback((): void => {
    dispatch(showPermanentlyDeleteAlert())
    dispatch(setPermanentlyDeleteAlertPage(id))
  }, [dispatch, id])

  return (
    <StyledItem
      isActive={isActive}
      onMouseEnter={() => onSelectActiveItem({ id, title })}
    >
      {icon ? (
        <Icon src={icon} alt='Icon' />
      ) : (
        <EmptyPageIconSvg width={17} height={17} />
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
            <BlackFilledTooltip title='Restore' coords={tooltipCoords} />
          )}
        </StyledButton>
        <StyledButton
          ref={deleteButtonRef}
          onClick={onOpenPermanentlyDeleteAlert}
        >
          <DeleteTrashSvg width={18} height={18} />
          {isDeleteButtonHovering && (
            <BlackFilledTooltip
              title='Delete permanently'
              coords={tooltipCoords}
            />
          )}
        </StyledButton>
      </ButtonsContainer>
    </StyledItem>
  )
})

export default DeletedPageItem
