import React, { FC, memo } from 'react'
import _ from 'lodash'

import { EmptyCommentsSvg } from 'components/ui/SVG'
import { StyledContainer, Title, Description } from './EmptyRightSidebar.styles'

const EmptyRightSidebar: FC<{ title: string }> = memo(({ title }) => (
  <StyledContainer>
    <EmptyCommentsSvg />
    <Title>No {title} comments yet</Title>
    <Description>
      {_.capitalize(title)} comments on this page will appear here
    </Description>
  </StyledContainer>
))

export default EmptyRightSidebar
