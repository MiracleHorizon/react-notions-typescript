import React from 'react'
import { useDispatch } from 'react-redux'

import { PopupOptionItemProps } from './PopupOptionItem.types'
import { closePageSettingsPopup } from 'redux/popupsSlice/slice'
import { StyledContainer, Title } from './PopupOptionItem.styles'

const PopupOptionItem: React.FC<PopupOptionItemProps> = props => {
  const { title, SVGComponent, action, activeItem, onSelect } = props
  const isActive = activeItem === title

  const dispatch = useDispatch()
  const onClickAction = (): void => {
    if (action) action() //*
    dispatch(closePageSettingsPopup())
  }

  return (
    <StyledContainer
      isActive={isActive}
      onClick={onClickAction}
      onMouseEnter={() => onSelect(title)}
    >
      {SVGComponent}
      <Title>{title}</Title>
    </StyledContainer>
  )
}

export default PopupOptionItem
