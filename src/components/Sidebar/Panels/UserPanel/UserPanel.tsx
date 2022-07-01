import React from 'react'

import { ACCOUNT_NAME } from 'utils/accountName' //!
import { Avatar, StyledPanel, Title } from './UserPanel.styles'
import ToggleSidebarButton, {
  ToggleSidebarBtnPurposes,
} from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton'
import avatarSvg from 'assets/img/appImgs/avatar.jpg'

const UserPanel: React.FC<{ isHovering: boolean }> = ({ isHovering }) => {
  return (
    <StyledPanel>
      <Avatar src={avatarSvg} alt='Avatar' />
      <Title>{ACCOUNT_NAME}'s Notion</Title>
      {isHovering && (
        <ToggleSidebarButton purpose={ToggleSidebarBtnPurposes.CLOSE} />
      )}
    </StyledPanel>
  )
}

export default UserPanel
