import styled from 'styled-components'
import { SidebarWrapperProps } from './Sidebar.types'

const Wrapper = styled.div<SidebarWrapperProps>`
  flex-grow: 0;
  flex-shrink: 0;
  width: ${props => props.width + 'px'};
  max-width: 450px;
  background: rgb(247, 246, 243);
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
`

const ShadowSeparator = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 10px;
  box-shadow: rgb(55 53 47 / 9%) 0 -1px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 5px;
`

export { Wrapper, Container, ShadowSeparator, Content }

//max-width: ${props => (props.isOpen ? '450px' : 0)};
//opacity: ${props => (props.isOpen ? 1 : 0)};
