import styled from 'styled-components'

const HeaderWrapper = styled.header`
  max-width: 100vw;
  background: white;
  z-index: 100;
  user-select: none;
`

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 45px;
  opacity: 1;
  transition: opacity 700ms ease 0s, color 700ms ease 0s;
`

const HeaderPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  padding-left: 12px;
  padding-right: 10px;
`

const PageTitleBlock = styled.div`
  cursor: pointer;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 7px;
  border-radius: 3px;

  :hover {
    background-color: #e8e7e3;
    transition: background-color 0.2s ease-in-out;
  }
  :active {
    background-color: #d3d3d3;
    transition: background-color 0.2s ease-in-out;
  }
`

const PageIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`

const PageTitle = styled.h4`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #37352f;
`

export {
  HeaderWrapper,
  HeaderContainer,
  HeaderPanel,
  PageTitleBlock,
  PageTitle,
  PageIcon,
}
