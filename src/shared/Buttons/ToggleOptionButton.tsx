import React from 'react'
import styled from 'styled-components'

const Switch = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 18px;
  padding: 0 2px;
  border-radius: 10px;
  background: ${props => (props.isActive ? '#2eaadc' : '#d0cfcb')};
  transition: background 0.2s ease-out;

  div {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    transform: translateX(${props => (props.isActive ? '6px' : '-6px')});
    transition: transform 0.2s ease-out;
  }
`

const ToggleOptionButton: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <Switch isActive={isActive}>
    <div />
  </Switch>
)
export default ToggleOptionButton
