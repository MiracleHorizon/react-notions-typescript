import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: inline-flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 100vw;
  background: white;
  user-select: none;
  z-index: 100;
  // overflow: auto; !!!
`

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0;
  max-width: 100vw;
  height: 45px;
`

const HeaderPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 0;
  height: 45px;
  padding-left: 12px;
`

const PageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export { HeaderWrapper, HeaderContainer, HeaderPanel, PageTitleWrapper }
