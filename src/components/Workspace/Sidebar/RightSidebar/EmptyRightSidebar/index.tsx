import React from 'react'
import EmptyCommentsSVG from '../../../../../shared/SVG/EmptyComments'
import wordCapitalize from 'utils/helpers/wordCapitalize'
import { StyledContainer, Title, Description } from './EmptyRightSidebar.styles'

const EmptyRightSidebar: React.FC<{ title: string }> = ({ title }) => (
  <StyledContainer>
    <EmptyCommentsSVG />
    <Title>No {title} comments yet</Title>
    <Description>
      {wordCapitalize(title)} comments on this page will appear here
    </Description>
  </StyledContainer>
)

export default EmptyRightSidebar
