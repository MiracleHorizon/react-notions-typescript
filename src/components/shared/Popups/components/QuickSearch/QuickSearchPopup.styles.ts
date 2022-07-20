import styled from 'styled-components'
import { modalBoxShadow } from '../../../../../styles/variables'

const Wrapper = styled.div<{ isFullWidth: boolean }>`
  position: relative;
  top: 100px;
  width: 75%;
  max-width: ${props => (props.isFullWidth ? '820px' : '600px')};
  min-height: 50px;
  max-height: 80vh;
  margin-bottom: 0;
  border-radius: 5px;
  box-shadow: ${modalBoxShadow};
  background: white;
  overflow: hidden;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 180px;
  max-width: calc(180vw - 24px);
  height: 100%;
  min-height: 50px;
  max-height: 80vh;
`

const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  flex-grow: 1;
  min-height: 0;
  max-height: 80vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  overflow: hidden;
`

const AsideFilter = styled.aside`
  flex: 0 0 220px;
  min-height: 400px;
  padding-top: 12px;
  padding-bottom: 24px;
  border-left: 1px solid rgba(55, 53, 47, 0.09);
  overflow-x: hidden;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.024);
`

export { Wrapper, Container, ContentBlock, Content, AsideFilter }
