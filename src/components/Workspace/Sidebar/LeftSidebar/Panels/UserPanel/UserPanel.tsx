import React from 'react'

import ToggleSidebarButton from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton'
import { UserPanelProps } from './UserPanel.types'
import { ToggleSidebarBtnPurposes as Purposes } from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton.types'
import { ACCOUNT_NAME } from 'utils/accountName' //!
import { Avatar, StyledPanel, Title } from './UserPanel.styles'
import avatarSvg from 'assets/img/appImgs/avatar.jpg'

const UserPanel: React.FC<UserPanelProps> = ({ isHovering, location }) => (
  <StyledPanel>
    <Avatar src={avatarSvg} alt='Avatar' />
    <Title>{ACCOUNT_NAME}'s Notion</Title>
    {isHovering && (
      <ToggleSidebarButton purpose={Purposes.CLOSE} location={location} />
    )}
  </StyledPanel>
)

export default UserPanel
