import styled from 'styled-components'

export const PanelWrapper = styled.div<{ isHasCover: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${props => (props.isHasCover ? '0' : '100px')};
  padding: 0 50px;
`

export const OptionsContainer = styled.div<{ isHovering: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  height: 35px;
  user-select: none;
  opacity: ${props => (props.isHovering ? 1 : 0)};
  transition: opacity 50ms ease-in-out 0.1s;
`

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
