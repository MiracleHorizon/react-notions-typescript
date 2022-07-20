import React, { FC, memo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { MoonLoader } from 'react-spinners'

import HeaderPageTitle from './HeaderPageTitle'
import PageSettingsPanel from './PageSettingsPanel'
import { OpenLeftSidebarButton } from 'components/ui'
import { LoadingStatuses } from 'api/types'
import {
  leftSidebarStateSelector,
  workspaceLoadingStatusesSelector,
} from 'redux/selectors'
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderPanel,
  PageTitleWrapper,
} from './Header.styles'

const Header: FC = memo(() => {
  const { isOpen: isLeftSidebarOpen, isBubbling: isLeftSidebarBubbling } =
    useSelector(leftSidebarStateSelector)
  const { newPageLoadingStatus } = useSelector(workspaceLoadingStatusesSelector)

  const headerRef = useRef<HTMLHeadElement>(null)
  const isHovering = useHover(headerRef)

  return (
    <HeaderWrapper ref={headerRef}>
      {(!isLeftSidebarOpen || (isLeftSidebarOpen && isLeftSidebarBubbling)) && (
        <OpenLeftSidebarButton isParentHovering={isHovering} />
      )}
      <HeaderContainer>
        <HeaderPanel>
          <PageTitleWrapper>
            <HeaderPageTitle />
            <MoonLoader
              size={15}
              speedMultiplier={0.65}
              loading={newPageLoadingStatus === LoadingStatuses.PENDING}
            />
          </PageTitleWrapper>
          <PageSettingsPanel />
        </HeaderPanel>
      </HeaderContainer>
    </HeaderWrapper>
  )
})

export default Header
