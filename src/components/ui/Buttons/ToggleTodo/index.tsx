import React, { FC, memo } from 'react'

import { CheckboxSquareSvg, CheckSvg } from 'components/ui/SVG'

import Props from './ToggleTodoButton.types'
import Container from './ToggleTodoButton.styles'

const ToggleTodoButton: FC<Props> = memo(
  ({ isActive, toggleActive, squareColor }) => (
    <Container role='button' isActive={isActive} onClick={toggleActive}>
      {isActive ? (
        <CheckSvg width={10} height={10} color='white' />
      ) : (
        <CheckboxSquareSvg color={squareColor} />
      )}
    </Container>
  )
)

export default ToggleTodoButton
