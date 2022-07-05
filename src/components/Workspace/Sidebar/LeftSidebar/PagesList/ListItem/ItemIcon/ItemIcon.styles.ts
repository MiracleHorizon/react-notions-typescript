import styled from 'styled-components'

export const IconBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 3px;
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export const PageIcon = styled.img`
  width: 17px;
  height: 17px;
  object-fit: cover;
`
