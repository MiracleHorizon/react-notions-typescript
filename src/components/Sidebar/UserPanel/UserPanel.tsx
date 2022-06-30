import React from 'react'

import { Avatar, Panel, Title } from './UserPanel.styles'
import ToggleSidebarButton, {
  ToggleSidebarBtnPurposes,
} from 'shared/Buttons/ToggleSidebar/ToggleSidebarButton'
import { ACCOUNT_NAME } from 'utils/accountName'
import avatarSvg from 'assets/img/appImgs/avatar.jpg'

interface SwitcherBarProps {
  isHovering: boolean
}

const UserPanel: React.FC<SwitcherBarProps> = ({ isHovering }) => {
  return (
    <Panel>
      <Avatar src={avatarSvg} alt='Avatar' />
      <Title>{ACCOUNT_NAME}'s Notion</Title>
      {isHovering && (
        <ToggleSidebarButton purpose={ToggleSidebarBtnPurposes.CLOSE} />
      )}
    </Panel>
  )
}

export default UserPanel
