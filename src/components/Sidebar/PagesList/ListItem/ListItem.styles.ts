import styled from 'styled-components'

const StyledItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 27px;
  margin: 2px 0;
  border-radius: 3px;
  background: ${props => props.isActive && 'rgba(55, 53, 47, 0.08)'};

  &:hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  &:active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const ToggleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 15px;
  border-radius: 3px;
  user-select: none;

  &:hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  &:active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const Information = styled.div`
  display: flex;
  align-items: center;
`

const IconBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 3px;

  &:hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  &:active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const Icon = styled.img`
  width: 16px;
  height: 16px;
`

const Title = styled.h4<{ isActive: boolean }>`
  padding-left: 5px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: ${props =>
    props.isActive ? 'rgb(55, 53, 47)' : 'rgba(55, 53, 47, 0.65)'};
`

export { StyledItem, ToggleIcon, Information, IconBlock, Icon, Title }
