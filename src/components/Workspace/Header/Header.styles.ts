import styled from 'styled-components'

const Wrapper = styled.header`
  display: inline-flex;
  justify-content: flex-start;
  max-width: 100vw;
  width: 100%;
  background: white;
  user-select: none;
  z-index: 100;
  // overflow: auto; !!!
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0;
  max-width: 100vw;
  height: 45px;
`

const HeaderPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 0;
  height: 45px;
  padding-left: 12px;
`

const PageTitleBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  padding: 3px 7px;
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
  width: 20px;
  height: 20px;
  margin-right: 5px;
  object-fit: cover;
  pointer-events: none;
`

const PageTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #37352f;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export { Wrapper, Container, HeaderPanel, PageTitleBlock, PageTitle, PageIcon }
