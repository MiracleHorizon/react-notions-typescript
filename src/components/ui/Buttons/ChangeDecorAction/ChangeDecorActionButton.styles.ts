import styled from 'styled-components'

const ActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

const ActionButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  max-height: 30px;
  margin-right: 3px;
  padding: 4px 6px;
  border-radius: 3px;
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }

  svg {
    margin-top: 1px;
    margin-right: 4px;
  }
`

const ActionTitle = styled.span`
  font-size: 14px;
  color: rgba(55, 53, 47, 0.65);
`

export { ActionButtonContainer, ActionButton, ActionTitle }
