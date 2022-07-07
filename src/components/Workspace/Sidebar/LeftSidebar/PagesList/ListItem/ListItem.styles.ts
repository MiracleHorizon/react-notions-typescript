import styled from 'styled-components'

const StyledItem = styled.li<{ isActive: boolean; isHovering: boolean }>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 25px;
  max-height: 27px;
  margin: 2px 0;
  border-radius: 3px;
  background: ${props => props.isActive && 'rgba(55, 53, 47, 0.08)'};
  transition: background 50ms ease-in-out;

  p {
    ${props => (props.isHovering ? 'max-width: 65%;' : 'max-width: 85%;')};
  }

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

const ToggleIconContainer = styled.div<{ isChild: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: ${props => (props.isChild ? '40px' : '10px')};
  margin-right: 2px;
  padding-left: 1px;
  border-radius: 3px;
  user-select: none;
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

const Information = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
`

const Title = styled.p<{ isActive: boolean }>`
  max-height: 100%;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props =>
    props.isActive ? 'rgb(55, 53, 47)' : 'rgba(55, 53, 47, 0.65)'};
`

export { StyledItem, ToggleIconContainer, Information, Title }
