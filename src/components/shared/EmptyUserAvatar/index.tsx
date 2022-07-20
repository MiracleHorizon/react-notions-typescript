import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import { userSelector } from 'redux/selectors'
import * as Avatar from './EmptyUserAvatar.styles'

const EmptyUserAvatar: FC = memo(() => {
  const userFullName = useSelector(userSelector)?.fullName

  return (
    <Avatar.Container>
      <Avatar.Title>{userFullName?.slice(0, 1)}</Avatar.Title>
    </Avatar.Container>
  )
})

export default EmptyUserAvatar
