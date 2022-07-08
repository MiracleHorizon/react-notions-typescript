import React from 'react'
import Props from './FilledButton.types'
import { StyledButton, Title } from './FilledButton.styles'

const FilledButton: React.FC<Props> = ({ onClickAction, title, colorInfo }) => (
  <StyledButton onClick={onClickAction} colorInfo={colorInfo}>
    <Title>{title}</Title>
  </StyledButton>
)

export default FilledButton
