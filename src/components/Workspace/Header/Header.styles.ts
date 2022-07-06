import styled from 'styled-components'

const Wrapper = styled.header`
  display: inline-flex;
  justify-content: flex-start;
  max-width: 100vw;
  width: 100%;
  background: white;
  user-select: none;
  z-index: 100;
  // overflow: auto; !!!
`

const Container = styled.div`
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

export { Wrapper, Container, HeaderPanel }
