import styled from 'styled-components'

const PageTitleContainer = styled.div`
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

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  object-fit: cover;
  pointer-events: none;
`

const Title = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #37352f;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export { PageTitleContainer, Title, Icon }
