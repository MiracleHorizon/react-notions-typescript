import styled from 'styled-components'

interface SidebarWrapperProps {
  isOpen: boolean
}

const SidebarWrapper = styled.div<SidebarWrapperProps>`
  position: relative;
  width: ${props => (props.isOpen ? '300px' : 0)};
  max-width: 480px;
  min-width: 0;
  min-height: 100vh;
  background: rgb(247, 246, 243);
  user-select: none;
  white-space: nowrap;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: width 0.5s ease-in-out;
`

const PagesList = styled.div`
  position: relative;
  margin-bottom: 10px;
`

export { SidebarWrapper, PagesList }
