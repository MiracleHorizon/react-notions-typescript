import styled from 'styled-components'

export const StyledButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 24px;
  border-top: 1px solid rgba(55, 53, 47, 0.16);
  border-bottom: 1px solid rgba(55, 53, 47, 0.16);
  border-left: 1px solid rgba(55, 53, 47, 0.16);
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export const Title = styled.span`
  font-size: 12px;
  line-height: 24px;
  color: rgba(55, 53, 47, 0.65);
`
