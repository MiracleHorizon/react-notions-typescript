import styled from 'styled-components'
import { WorkspaceContentProps } from './Workspace.types'

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  display: flex;
  flex: 1 1 0;
  //background: #ffc73e;
`

const Container = styled.div`
  width: 100%;
  //overflow: auto;
`

const Content = styled.div<WorkspaceContentProps>`
  width: ${props =>
    props.isRightSidebarOpen
      ? `calc(100% - ${props.rightSidebarWidth}px)`
      : '100%'};
`

export { Wrapper, Container, Content }
