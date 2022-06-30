import styled from 'styled-components'

const StyledItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  height: 28px;
  margin: 2px 0;
  border-radius: 3px;
  background: ${props => props.isActive && 'rgba(55, 53, 47, 0.08)'};

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const ToggleIconBlock = styled.div<{ isChild: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: ${props => (props.isChild ? '40px' : '10px')};
  margin-right: 2px;
  border-radius: 3px;
  user-select: none;

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const ToggleIcon = styled.img<{ isOpen: boolean }>`
  width: 16px;
  height: 16px;
  opacity: 0.5;
  transform: rotate(${props => props.isOpen && '90deg'});
  transition: transform 0.2s ease-in-out;
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

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const PageIcon = styled.img`
  width: 17px;
  height: 17px;
  object-fit: cover;
`

const Title = styled.h4<{ isActive: boolean }>`
  padding-left: 5px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: ${props =>
    props.isActive ? 'rgb(55, 53, 47)' : 'rgba(55, 53, 47, 0.65)'};
`

export {
  StyledItem,
  ToggleIconBlock,
  ToggleIcon,
  Information,
  IconBlock,
  PageIcon,
  Title,
}
