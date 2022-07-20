import styled from 'styled-components'
import { WorkspaceContentProps } from './Workspace.types'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex: 1 1 0;
  //background: pink;
`

export const Container = styled.div`
  width: 100%;
  //overflow: auto;
`

export const Content = styled.div<WorkspaceContentProps>`
  height: 100vh;
  min-height: calc(100vh - 45px);
  width: ${props =>
    props.isRightSidebarOpen
      ? `calc(100% - ${props.rightSidebarWidth}px)`
      : '100%'};
  overflow: auto;
  transition: width 0.3s ease-in-out;
  //user-select: none;
`
