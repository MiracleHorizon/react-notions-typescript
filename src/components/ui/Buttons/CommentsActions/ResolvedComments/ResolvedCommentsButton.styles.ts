import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 30px;
  user-select: none;
`

export const StyledButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: max-content;
  min-width: 150px;
  min-height: 20px;
  padding: 4px 6px;
  border-radius: 3px;
  transition: background 20ms ease-in 0s;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgba(55, 53, 47, 0.65);
`
