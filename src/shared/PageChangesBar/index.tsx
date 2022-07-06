import React from 'react'

import { ACCOUNT_NAME } from 'utils/accountName' // *
import StyledBar from './PageChangesBar.styles'

const PageChangesBar: React.FC = () => (
  <StyledBar>
    <p>Last edited by {ACCOUNT_NAME}</p>
    <p>Today at 9:38 PM</p>
  </StyledBar>
)

export default PageChangesBar
