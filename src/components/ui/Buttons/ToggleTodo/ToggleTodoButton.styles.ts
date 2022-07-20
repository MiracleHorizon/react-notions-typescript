import styled from 'styled-components'

const Container = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  min-height: 16px;
  width: 16px;
  height: 16px;
  background: ${props => (props.isActive ? 'rgb(46, 170, 220)' : 'white')};
  transition: background 50ms ease-in 0s;

  :hover {
    background: ${props => !props.isActive && 'rgba(55, 53, 47, 0.08)'};
  }
`

export default Container
