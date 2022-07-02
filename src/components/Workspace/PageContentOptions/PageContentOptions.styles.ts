import styled from 'styled-components'

const OptionsPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  //background: pink;
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

  &:hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  &:active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const OptionsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  height: 35px;
  user-select: none;
  opacity: 0;

  :hover {
    opacity: 1;
    transition: opacity 50ms ease-in-out 0.1s;
  }
`

const PageIcon = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 3px;
  object-fit: cover;
  pointer-events: none;
`

const PageTitle = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  font-size: 40px;
  font-weight: 700;
  white-space: pre-wrap;
  word-break: break-word;
  color: rgb(55, 53, 47);
`

export { OptionsPanel, OptionsContainer, PageIconBlock, PageIcon, PageTitle }
