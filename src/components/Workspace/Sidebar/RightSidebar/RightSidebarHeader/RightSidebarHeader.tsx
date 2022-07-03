import React from 'react'

import {
  Wrapper,
  Header,
  Title,
  StyledDropdown,
} from './RightSidebarHeader.styles'
import DropdownItem from './DropdownItem/DropdownItem'

const options = [
  { title: 'Open', description: 'Open comments' },
  { title: 'Resolved', description: 'Resolved comments' },
]

const RightSidebarHeader: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Comments</Title>
        <StyledDropdown>
          {options.map(({ title, description }) => (
            <DropdownItem key={description} />
          ))}
        </StyledDropdown>
      </Header>
    </Wrapper>
  )
}

export default RightSidebarHeader
