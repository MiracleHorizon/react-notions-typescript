import React from 'react'

import CloseLeftSidebarButton from 'shared/Buttons/ToggleSidebar/components/CloseLeft'
import { ACCOUNT_NAME } from 'utils/accountName' //!
import { Avatar, StyledPanel, Title } from './UserPanel.styles'
import avatarSvg from 'assets/img/appImgs/avatar.jpg'

const UserPanel: React.FC<{ isHovering: boolean }> = ({ isHovering }) => (
  <StyledPanel>
    <Avatar src={avatarSvg} alt='Avatar' />
    <Title>{ACCOUNT_NAME}'s Notion</Title>
    <CloseLeftSidebarButton isParentHovering={isHovering} />
  </StyledPanel>
)

export default UserPanel
