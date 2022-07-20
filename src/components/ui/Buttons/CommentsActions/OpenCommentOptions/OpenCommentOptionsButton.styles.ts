import styled from 'styled-components'

const StyledButton = styled.div<{ floating: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  width: 24px;
  height: 24px;
  ${props => props.floating && 'margin-left: 5px'};
  border: 1px solid rgba(55, 53, 47, 0.16);
  ${props =>
    props.floating
      ? 'border-radius: 3px;'
      : `border-top-right-radius: 3px;
         border-bottom-right-radius: 3px;`};
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }

  svg {
    opacity: 0.5;
  }
`

export default StyledButton
