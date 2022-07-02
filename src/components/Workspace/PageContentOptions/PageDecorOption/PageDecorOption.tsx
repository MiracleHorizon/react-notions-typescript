import React from 'react'
import { PageDecorOptionProps } from './PageDecorOption.types'
import { StyledOption, Icon, Title } from './PageDecorOption.styles'

const PageDecorOption: React.FC<PageDecorOptionProps> = props => {
  const { icon, optionTitle, onClickAction } = props

  return (
    <StyledOption role='button' onClick={onClickAction}>
      <Icon src={icon} alt={`Add ${optionTitle}`} />
      <Title>Add {optionTitle}</Title>
    </StyledOption>
  )
}

export default PageDecorOption
