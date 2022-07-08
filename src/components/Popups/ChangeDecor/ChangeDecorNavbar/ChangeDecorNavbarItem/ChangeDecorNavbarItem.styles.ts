import styled from 'styled-components'

const ItemWrapper = styled.div`
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0 2px;
  padding: 6px 0;
`

const Item = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  max-height: 30px;
  padding: 4px 6px;
  border-radius: 3px;
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

const Title = styled.span`
  font-size: 14px;
  color: rgba(55, 53, 47, 0.65);
`

const StyledActiveBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 8px;
  right: 8px;
  border-bottom: 2px solid rgb(55, 53, 47);
`

export { ItemWrapper, Item, Title, StyledActiveBorder }
