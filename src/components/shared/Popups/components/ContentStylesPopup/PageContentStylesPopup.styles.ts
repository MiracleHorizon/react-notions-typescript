import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  right: 30%;
  width: 220px;
  min-height: 30vh;
  max-height: 70vh;
  padding: 5px 0;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  background: white;
  z-index: 1001;
  overflow: auto;
`

export const OptionsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ListTitle = styled.span`
  align-self: flex-start;
  margin: 5px 0 5px 14px;
  user-select: none;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(55, 53, 47, 0.65);
`
