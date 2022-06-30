import styled from 'styled-components'

interface SidebarWrapperProps {
  isOpen: boolean
  width: number
}

const SidebarWrapper = styled.div<SidebarWrapperProps>`
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  z-index: 99;
  background: rgb(247, 246, 243);
  width: ${props => props.width + 'px'};
  transition: width 0.5s ease-in-out;
`

const SidebarContainer = styled.div`
  color: rgba(25, 23, 17, 0.6);
  font-weight: 500;
  height: 100%;
`

const SidebarContentWrapper = styled.div<{ width: number }>`
  position: relative;
  width: ${props => props.width + 'px'};
  max-width: 480px;
  min-width: 0;
  height: 100%;
  max-height: 100%;
  background: rgb(247, 246, 243);
  user-select: none;
  white-space: nowrap;
`

const SidebarContentShadow = styled.div`
  display: none;
  position: absolute;
  inset: 0;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: -1;
  background: white;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
`

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
`

const PagesList = styled.div`
  position: relative;
  margin-bottom: 10px;
`

export {
  SidebarWrapper,
  SidebarContainer,
  SidebarContentWrapper,
  SidebarContentShadow,
  SidebarContent,
  PagesList,
}
