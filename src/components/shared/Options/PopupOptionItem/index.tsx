import React from 'react'
import { useDispatch } from 'react-redux'

import { PopupOptionItemProps } from './PopupOptionItem.types'
import { closePageSettingsPopup } from 'redux/reducers/popupsSlice/slice'
import { StyledContainer, Title } from './PopupOptionItem.styles'

const PopupOptionItem: React.FC<PopupOptionItemProps> = props => {
  const { title, icon, action, activeItem, onSelect } = props
  const dispatch = useDispatch()

  const onClickAction = (): void => {
    dispatch(closePageSettingsPopup())
    action()
  }

  return (
    <StyledContainer
      {...{ isActive: activeItem === title }}
      onClick={onClickAction}
      onMouseEnter={() => onSelect(title)}
    >
      {icon}
      <Title>{title}</Title>
    </StyledContainer>
  )
}

export default PopupOptionItem
