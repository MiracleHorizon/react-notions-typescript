import styled from 'styled-components'

export const PageTitleContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  max-width: 300px;
  margin-right: 7px;
  padding: 3px 6px;
  border-radius: 3px;
  transition: background 20ms ease-in 0s;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  object-fit: cover;
  pointer-events: none;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgb(55, 53, 47);
`
