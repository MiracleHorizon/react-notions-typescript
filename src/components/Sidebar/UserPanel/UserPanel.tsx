import React from 'react'

import { Panel, Avatar, Title } from './UserPanel.styles'
import SwitchSidebarButton from 'shared/Buttons/SwitchSidebar'
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
      {isHovering && <SwitchSidebarButton purpose='close' />}
    </Panel>
  )
}

export default UserPanel
