import React from 'react'
import styled from 'styled-components'
import { IElementCoords } from '../../@types/generalTypes'
import clearInputSvg from 'assets/img/inputs/clearInput.svg'

interface IClearInputProps {
  action: () => void
  coords: IElementCoords
}

const InputBlock = styled.div<IElementCoords>`
  position: absolute;
  top: ${props => props?.top};
  bottom: ${props => props?.bottom};
  left: ${props => props?.left};
  right: ${props => props?.right};
  opacity: 0.5;
`

const StyledIcon = styled.img`
  cursor: pointer;
  width: 17px;
  height: 17px;
`

const ClearInputButton: React.FC<IClearInputProps> = ({ action, coords }) => (
  <InputBlock {...coords}>
    <StyledIcon src={clearInputSvg} alt='Clear' onClick={action} />
  </InputBlock>
)

export default ClearInputButton
