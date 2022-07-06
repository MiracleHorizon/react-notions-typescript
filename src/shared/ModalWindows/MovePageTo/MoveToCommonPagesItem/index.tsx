import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ActiveItemParams } from '../MovePageToModalItem/MovePageToModalItem.types'
import { closeMovePageToModal } from 'redux/modalsSlice/slice'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { selectedItemHandler } from 'utils/helpers/selectedItemHandler'
import {
  CommonPagesItem,
  Title,
  MoveToTitle,
  AvatarContainer,
  Avatar,
} from './MoveToCommonPagesItem.styles'
import avatar from 'assets/img/Avatar1.jpg'

const MoveToCommonPagesItem: React.FC<ActiveItemParams> = props => {
  const { activeItem, onSelectActiveItem } = props
  const { id } = useSelector(currentPageSelector)
  const item = { title: 'Move to Common pages', id: 0 }
  const isActive = selectedItemHandler({ activeItem, item })
  const dispatch = useDispatch()

  const onMovePageToCommonPages = (): void => {
    console.log(`Страница с айди ${id} добавлена в common pages`)
    dispatch(closeMovePageToModal())
  }

  return (
    <CommonPagesItem
      isActive={isActive}
      onClick={onMovePageToCommonPages}
      onMouseEnter={() => onSelectActiveItem(item)}
    >
      <AvatarContainer>
        <Avatar src={avatar} />
      </AvatarContainer>
      <MoveToTitle>
        Move to <Title>Common pages</Title>
      </MoveToTitle>
    </CommonPagesItem>
  )
}

export default MoveToCommonPagesItem
