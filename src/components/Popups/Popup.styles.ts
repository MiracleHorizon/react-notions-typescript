import styled from 'styled-components'

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  user-select: none;
`

export const PopupInset = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(15, 15, 15, 0.6);
  z-index: -1;
`
