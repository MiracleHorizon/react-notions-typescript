import styled from 'styled-components'

export const StyledItem = styled.div<{ paddingLeft: number }>`
  width: 100%;
  min-width: 0;
  height: 27px;
  padding: 2px 10px 2px ${props => props.paddingLeft + 'px'};
`

export const Title = styled.span`
  padding-left: 6px;
  font-size: 14px;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgba(55, 53, 47, 0.5);
`
