import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import EmptyUserAvatar from 'components/shared/EmptyUserAvatar'
import { CloseLeftSidebarButton } from 'components/ui'
import { userSelector } from 'redux/selectors'
import { Avatar, PanelWrapper, Title } from './UserPanel.styles'

const UserPanel: FC<{ isHovering: boolean }> = memo(({ isHovering }) => {
  const user = useSelector(userSelector)

  return (
    <PanelWrapper>
      {user?.avatarUrl ? (
        <Avatar src={user.avatarUrl} alt='Avatar' />
      ) : (
        <EmptyUserAvatar />
      )}
      <Title>{user?.fullName}'s Notion</Title>
      <CloseLeftSidebarButton isParentHovering={isHovering} />
    </PanelWrapper>
  )
})

export default UserPanel
