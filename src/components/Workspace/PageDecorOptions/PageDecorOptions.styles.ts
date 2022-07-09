import styled from 'styled-components'

const OptionsPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const OptionsContainer = styled.div<{ isHovering: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  height: 35px;
  user-select: none;
  opacity: ${props => (props.isHovering ? 1 : 0)};
  transition: opacity 50ms ease-in-out 0.1s;
`

const PageIconBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  margin-top: -80px;
  border-radius: 3px;
  user-select: none;
  z-index: 1;
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

const PageIcon = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 3px;
  object-fit: cover;
  pointer-events: none;
`

export { OptionsPanel, OptionsContainer, PageIconBlock, PageIcon }
