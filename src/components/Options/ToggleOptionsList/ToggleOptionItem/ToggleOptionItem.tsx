import React from 'react'
import { useDispatch } from 'react-redux'

import ToggleOptionButton from 'shared/Buttons/ToggleOptionButton'
import { IToggleOption } from 'helpers/toggleOptionsHandler'
import { ActiveListItem } from '../../../../@types/generalTypes'
import { StyledItem, Title } from './ToggleOptionItem.styles'

interface ToggleOptionItemProps extends ActiveListItem {
  option: IToggleOption
}

const ToggleOptionItem: React.FC<ToggleOptionItemProps> = props => {
  const { option, activeItem, onSelect } = props
  const { id, title, isActive, toggleIsActive } = option
  const isSelected: boolean = activeItem === title

  const dispatch = useDispatch()
  const onToggleButton = (): void => {
    dispatch(toggleIsActive(id))
  }

  return (
    <StyledItem
      isSelected={isSelected}
      onClick={onToggleButton}
      onMouseEnter={() => onSelect(title)}
    >
      <Title>{title}</Title>
      <ToggleOptionButton isActive={isActive} />
    </StyledItem>
  )
}

export default ToggleOptionItem
