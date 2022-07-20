import React from 'react'
import StyledButton from './ToggleOptionButton.styles'

const ToggleOptionButton: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <StyledButton isActive={isActive}>
    <div />
  </StyledButton>
)

export default ToggleOptionButton
