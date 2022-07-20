import React, { FC } from 'react'

import {
  Wrapper,
  TextContainer,
  Title,
  Description,
} from '../BlackFilledTooltip.styles'

const AddBlockBelowTooltip: FC = () => {
  return (
    <Wrapper>
      <TextContainer>
        <Title>Click</Title>
        <Description> to add a block below</Description>
      </TextContainer>
      <TextContainer>
        <Title>Option-click</Title>
        <Description>to add block to the right</Description>
      </TextContainer>
    </Wrapper>
  )
}

export default AddBlockBelowTooltip
