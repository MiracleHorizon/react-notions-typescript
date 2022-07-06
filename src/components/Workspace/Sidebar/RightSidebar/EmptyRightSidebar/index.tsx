import React from 'react'
import _ from 'lodash'

import EmptyCommentsSVG from 'shared/SVG/EmptyComments'
import { StyledContainer, Title, Description } from './EmptyRightSidebar.styles'

const EmptyRightSidebar: React.FC<{ title: string }> = ({ title }) => (
  <StyledContainer>
    <EmptyCommentsSVG />
    <Title>No {title} comments yet</Title>
    <Description>
      {_.capitalize(title)} comments on this page will appear here
    </Description>
  </StyledContainer>
)

export default EmptyRightSidebar
