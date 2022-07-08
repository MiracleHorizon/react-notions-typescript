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
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

const Icon = styled.img`
  width: 17px;
  height: 17px;
  margin-left: 2px;
  object-fit: cover;
  pointer-events: none;
`

const EnterBlock = styled.div`
  position: absolute;
  right: 17px;
`

const Title = styled.span<{ purpose: 'Page' | 'Search' }>`
  margin-left: 10px;
  font-size: 14px;
  font-weight: ${props => (props.purpose === 'Page' ? 500 : 400)};
  line-height: 21px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(55, 53, 47);
`

export { Item, Icon, EnterBlock, Title }
