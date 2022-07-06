import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'

import Props from './ToggleFontButton.types'
import {
  ButtonContainer,
  FontButton,
  Title,
  Abbreviation,
} from './ToggleFontButton.styles'

const ToggleFontButton: React.FC<Props> = props => {
  const { title, fontFamily, tooltipTitle, activeFont, setActiveFont } = props
  const isActive = activeFont === title

  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  const onSelectPageFont = (): void => setActiveFont(title)

  return (
    <ButtonContainer
      role='button'
      tabIndex={0}
      ref={buttonRef}
      onClick={onSelectPageFont}
    >
      <FontButton>
        <Abbreviation {...{ isActive, fontFamily }}>Ag</Abbreviation>
        <Title>{title}</Title>
      </FontButton>
    </ButtonContainer>
  )
}

export default ToggleFontButton
