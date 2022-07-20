import styled from 'styled-components'

const StyledOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 3px;
  padding: 2px 6px;
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
  margin-left: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(55, 53, 47, 0.5);
`

export { StyledOption, Title }
