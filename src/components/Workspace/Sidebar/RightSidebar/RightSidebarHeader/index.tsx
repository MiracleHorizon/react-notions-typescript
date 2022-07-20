import React, { FC } from 'react'

import CommentsFilter from './CommentsFilter'
import { HeaderWrapper, Header, Title } from './RightSidebarHeader.styles'

const RightSidebarHeader: FC = () => (
  <HeaderWrapper>
    <Header>
      <Title>Comments</Title>
      <CommentsFilter />
    </Header>
  </HeaderWrapper>
)

export default RightSidebarHeader
