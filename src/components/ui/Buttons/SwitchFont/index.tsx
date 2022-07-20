import React, { FC, memo, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import { useAppDispatch } from 'redux/store'
import Props from './ToggleFontButton.types'
import { updatePage } from 'api/reduxAsyncThunks'
import { currentPageSelector } from 'redux/selectors'
import objectCopier from 'helpers/objectCopier'
import {
  ButtonContainer,
  FontButton,
  Title,
  Abbreviation,
} from './ToggleFontButton.styles'

const SwitchFontButton: FC<Props> = memo(props => {
  const { title, fontFamily, tooltipTitle, selectedFont } = props
  const currentPageCopy = objectCopier(useSelector(currentPageSelector))
  const isActive = selectedFont === fontFamily
  const appDispatch = useAppDispatch()

  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  const onSelectPageFont = useCallback((): void => {
    currentPageCopy.pageSettings.selectedFont = title
    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, currentPageCopy, title])

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
})

export default SwitchFontButton
