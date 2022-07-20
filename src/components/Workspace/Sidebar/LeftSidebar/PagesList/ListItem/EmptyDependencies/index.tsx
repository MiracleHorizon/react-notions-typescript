import React, { FC } from 'react'
import { StyledItem, Title } from './EmptyItemDependecies.styles'

const EmptyItemDependencies: FC<{ paddingLeft: number }> = props => (
  <StyledItem {...props}>
    <Title>No pages inside</Title>
  </StyledItem>
)

export default EmptyItemDependencies
