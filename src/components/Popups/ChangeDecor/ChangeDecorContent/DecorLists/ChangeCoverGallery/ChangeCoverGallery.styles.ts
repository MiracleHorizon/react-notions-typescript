import styled from 'styled-components'

const ListTitleContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 2px 3px;
  border-radius: 3px;
  transition: background 50ms ease-in-out;
  user-select: none;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

const StyledLink = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const ListTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: rgba(55, 53, 47, 0.65);
`

const CoversGalleryList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  padding: 3px;
`

export { ListTitleContainer, StyledLink, ListTitle, CoversGalleryList }
