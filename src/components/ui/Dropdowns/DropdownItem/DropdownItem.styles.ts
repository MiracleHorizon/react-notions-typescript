import styled from 'styled-components'

export const StyledItem = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 28px;
  margin: 1px 0;
  padding-right: 10px;
  border-radius: 3px;
  background: ${props => props.isActive && 'rgba(55, 53, 47, 0.08)'};
`

export const Description = styled.span`
  position: relative;
  bottom: 1px;
  margin-right: 15px;
  margin-left: 10px;
  font-size: 14px;
`
