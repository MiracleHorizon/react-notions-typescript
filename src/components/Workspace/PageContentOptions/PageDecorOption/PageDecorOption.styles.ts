import styled from 'styled-components'

const StyledOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  padding: 2px 4px;
  border-radius: 3px;
  margin-right: 3px;

  &:hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.15s ease-in-out;
  }
  &:active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.15s ease-in-out;
  }
`

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  object-fit: cover;
  pointer-events: none;
  opacity: 0.5;
`

const Title = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgba(55, 53, 47, 0.5);
`

export { StyledOption, Icon, Title }
