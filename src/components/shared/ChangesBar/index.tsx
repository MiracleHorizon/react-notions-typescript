import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import { userSelector } from 'redux/selectors'
import StyledBar from './ChangesBar.styles'

const ChangesBar: FC<{ updatedAt: string }> = memo(({ updatedAt }) => {
  const user = useSelector(userSelector)

  return (
    <StyledBar>
      <p>Last edited by {user ? user.fullName : 'Anonymous'}</p>
      <p>{updatedAt}</p>
    </StyledBar>
  )
})

export default ChangesBar
