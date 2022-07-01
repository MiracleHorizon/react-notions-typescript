import styled from 'styled-components'

const Item = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin: 2px 0;
  padding: 8px;
  border-radius: 3px;
  user-select: none;
  background: ${props => props.isActive && 'rgba(55, 53, 47, 0.08)'};

  &:hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-out;
  }
  &:active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-out;
  }
`

const Icon = styled.img`
  width: 17px;
  height: 17px;
  margin-left: 2px;
`

const Title = styled.span<{ purpose: 'page' | 'search' }>`
  margin-left: 10px;
  font-size: 14px;
  font-weight: ${props => (props.purpose === 'page' ? 500 : 400)};
  line-height: 21px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(55, 53, 47);
`

export { Item, Icon, Title }
