import styled from 'styled-components'

const StyledItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  height: 27px;
  border-radius: 3px;
  margin: 0 4px;

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 50ms ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 50ms ease-in-out;
  }

  svg {
    width: 16px;
    height: 16px;
    margin-left: 15px;
  }
`

const Title = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(55, 53, 47, 0.65);
`

export { StyledItem, Title }
