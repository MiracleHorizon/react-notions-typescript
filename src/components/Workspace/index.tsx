import React, { FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Header from './Header'
import PageCover from './PageCover'
import Board from '../PageTemplates/Board'
import { LeftSidebar, RightSidebar } from './Sidebar'

import { currentPageSelector, rightSidebarStateSelector } from 'redux/selectors'
import { Wrapper, Container, Content } from './Workspace.styles'

const Workspace: FC = memo(() => {
  const { _id, title, iconInfo, template, createdAt } =
    useSelector(currentPageSelector)
  const { isOpen: isRightSidebarOpen, width: rightSidebarWidth } = useSelector(
    rightSidebarStateSelector
  )

  useEffect(() => {
    const link = document.getElementById('favicon') as HTMLLinkElement

    link.href = iconInfo.iconUrl
  }, [iconInfo.iconUrl])

  return (
    <Wrapper>
      <LeftSidebar />
      <RightSidebar />
      <Container>
        <Header />
        <Content
          isRightSidebarOpen={isRightSidebarOpen}
          rightSidebarWidth={rightSidebarWidth}
        >
          <PageCover />
          {template === 'Board' ? <Board /> : <>Такого шаблона пока ещё нет</>}
        </Content>
      </Container>
    </Wrapper>
  )
})

export default Workspace
