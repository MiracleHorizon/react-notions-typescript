import React from 'react'
import { useDispatch } from 'react-redux'

import {
  setSidebarClose,
  setSidebarOpen,
  toggleSidebar,
} from 'redux/sidebarSlice/slice'
import { StyledButton, Icon } from './ToggleSidebarButton.styles'
import switchSvg from 'assets/img/sidebar-twoArrows.svg'

enum ToggleSidebarBtnPurposes {
  OPEN = 'open',
  CLOSE = 'close',
}

interface ToggleSidebarBtnProps {
  purpose: ToggleSidebarBtnPurposes
}

const ToggleSidebarButton: React.FC<ToggleSidebarBtnProps> = ({ purpose }) => {
  const dispatch = useDispatch()
  const onClickAction =
    purpose === ToggleSidebarBtnPurposes.OPEN
      ? () => dispatch(setSidebarOpen())
      : () => dispatch(setSidebarClose()) //! useCallback попробовать.

  const onHover = (): void => {
    // purpose === ToggleSidebarBtnPurposes.OPEN && dispatch(toggleSidebar())
  }

  return (
    <StyledButton
      purpose={purpose}
      onClick={onClickAction}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <Icon src={switchSvg} alt='Switch' />
    </StyledButton>
  )
}

export default ToggleSidebarButton
export { ToggleSidebarBtnPurposes }
