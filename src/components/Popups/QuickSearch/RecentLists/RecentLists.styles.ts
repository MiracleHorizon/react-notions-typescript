import styled from 'styled-components'

const RecentListsWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`
const ListWrapper = styled.div`
  padding: 0 5px;
  margin-top: 2px;
`

const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  user-select: none;
`

const Title = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  line-height: 21px;
  color: rgba(55, 53, 47, 0.65);
`

const ClearButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 20px;
  border-radius: 3px;
  padding: 0 4px;

  &:hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-out;
  }
  &:active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-out;
  }
`

const ClearTitle = styled.span`
  font-size: 12px;
  line-height: 21px;
  white-space: nowrap;
  color: rgba(55, 53, 47, 0.5);
`
export {
  RecentListsWrapper,
  ListWrapper,
  TitleBlock,
  Title,
  ClearButton,
  ClearTitle,
}
