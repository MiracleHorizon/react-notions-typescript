import React from 'react'
import styled from 'styled-components'

const StyledSeparator = styled.div`
  width: 100%;
  height: 1px;
  margin: 6px 0;
  background-color: #f4f3f3;
`

const Separator: React.FC = () => <StyledSeparator />

export default Separator
