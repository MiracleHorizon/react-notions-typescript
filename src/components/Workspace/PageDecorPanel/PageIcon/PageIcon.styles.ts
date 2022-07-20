import styled from 'styled-components'

export const PageIconContainer = styled.div<{ isHasCover: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  margin-top: ${props => (props.isHasCover ? '-80px' : '0')};
  border-radius: 3px;
  user-select: none;
  pointer-events: auto;
  z-index: 1;
  transition: background 20ms ease-in 0s;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export const Icon = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 3px;
  object-fit: cover;
  pointer-events: none;
`
