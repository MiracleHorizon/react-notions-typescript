import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5px 0;
  user-select: none;
`

export const Container = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  width: calc(100% - 8px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 2px;
  border-radius: 3px;
  transition: background 20ms ease-in 0s;
  background: ${props => props.isActive && 'rgba(55, 53, 47, 0.08)'};

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export const ImageContainer = styled.div`
  width: 46px;
  height: 46px;
  margin-left: 10px;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

export const TextContainer = styled.div`
  margin-left: 10px;

  h4,
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 400;
`

export const Description = styled.p`
  font-size: 12px;
  color: rgba(55, 53, 47, 0.65);
`
