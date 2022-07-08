import styled from 'styled-components'

const ListTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  cursor: pointer;
  padding: 2px 3px;
  border-radius: 3px;
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

const CoversGalleryList = styled.div``

export { ListTitleContainer, CoversGalleryList }
