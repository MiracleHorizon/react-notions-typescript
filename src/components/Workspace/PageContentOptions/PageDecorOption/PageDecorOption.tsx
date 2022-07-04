import React from 'react'
import { PageDecorOptionProps } from './PageDecorOption.types'
import { StyledOption, Title } from './PageDecorOption.styles'

const PageDecorOption: React.FC<PageDecorOptionProps> = props => {
  const { IconSVG, optionTitle, onClickAction } = props

  return (
    <StyledOption role='button' onClick={onClickAction}>
      <IconSVG />
      <Title>Add {optionTitle}</Title>
    </StyledOption>
  )
}

export default PageDecorOption
