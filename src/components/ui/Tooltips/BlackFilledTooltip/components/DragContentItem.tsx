import React, { FC } from 'react'

import {
  Wrapper,
  TextContainer,
  Title,
  Description,
} from '../BlackFilledTooltip.styles'

const DragContentItemTooltip: FC = () => {
  return (
    <Wrapper>
      <TextContainer>
        <Title>Drag</Title>
        <Description>to move</Description>
      </TextContainer>
      <TextContainer>
        <Title>Click</Title>
        <Description>to open menu</Description>
      </TextContainer>
    </Wrapper>
  )
}

export default DragContentItemTooltip
