import styled from 'styled-components'

export const ItemContainer = styled.div`
  position: relative;
  width: 25%;
  padding: 3px;
  overflow: hidden;
`

export const StyledItem = styled.img`
  cursor: pointer;
  display: block;
  width: 100%;
  height: 64px;
  border-radius: 3px;
  object-position: center 50%;
  object-fit: cover;

  :hover {
    opacity: 0.9;
  }
`
