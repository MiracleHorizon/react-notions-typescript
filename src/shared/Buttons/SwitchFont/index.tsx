import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import Props from './ToggleFontButton.types'
import { setPageFontFamily } from 'redux/workSpaceSlice/slice'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  ButtonContainer,
  FontButton,
  Title,
  Abbreviation,
} from './ToggleFontButton.styles'

const ToggleFontButton: React.FC<Props> = props => {
  const { title, fontFamily, tooltipTitle, activeFont } = props
  const { id } = useSelector(currentPageSelector)
  const isActive = activeFont === fontFamily
  const dispatch = useDispatch()

  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  const onSelectPageFont = (): void => {
    dispatch(setPageFontFamily({ id, fontFamily }))
  }

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
