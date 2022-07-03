import React from 'react'
import { useDispatch } from 'react-redux'

import { PopupOptionItemProps } from './PopupOptionItem.types'
import { closePageSettingsPopup } from 'redux/popupsSlice/slice'
import { StyledContainer, Title } from './PopupOptionItem.styles'

const PopupOptionItem: React.FC<PopupOptionItemProps> = props => {
  const { title, SVGComponent, action, activeItem, onSelect } = props
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
      {SVGComponent}
      <Title>{title}</Title>
    </StyledContainer>
  )
}

export default PopupOptionItem
