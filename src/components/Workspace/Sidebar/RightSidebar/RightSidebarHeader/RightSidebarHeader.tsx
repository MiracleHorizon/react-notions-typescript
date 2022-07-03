import React from 'react'
import CommentsFilter from './CommentsFilter/CommentsFilter'
import { Wrapper, Header, Title } from './RightSidebarHeader.styles'

const RightSidebarHeader: React.FC = () => (
  <Wrapper>
    <Header>
      <Title>Comments</Title>
      <CommentsFilter />
    </Header>
  </Wrapper>
)

export default RightSidebarHeader
