import styled from 'styled-components'

const EmojiList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 5px;
`

const ListTitle = styled.span`
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(55, 53, 47, 0.65);
  margin-bottom: 5px;
`

const EmojiItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 1px;
  border-radius: 3px;
  transition: background 50ms ease-in-out;
  font-size: 22px;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

const InputContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 5px 10px;
`

export { EmojiList, ListTitle, EmojiItem, InputContainer }
