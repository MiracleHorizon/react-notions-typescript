import styled from 'styled-components'

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  margin-top: 10px;
  margin-bottom: ${props => (props.isOpen ? '20px' : '0px')};
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const List = styled.ul`
  width: 100%;
`

export { Wrapper, Container, List }
