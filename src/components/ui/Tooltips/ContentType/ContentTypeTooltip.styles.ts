import styled from 'styled-components'
import { ElementCoords } from 'types'

export const Wrapper = styled.div<{coords: ElementCoords}>`
  position: fixed;
  top: ${props => props.coords.top};
  left: ${props => props.coords.left};
  width: 155px;
  max-height: 160px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 30%) 0 1px 3px;
  background: rgb(15, 15 ,15);
  user-select: none;
`

export const Container = styled.div`
  flex: 1;
  padding: 7px;
  border-radius: 4px;
  overflow: hidden;
`

export const ImageContainer = styled.div`
  flex: 1;
`

export const Image = styled.img`
  width: 100%;
  border-radius: 3px;
  object-fit: cover;
  pointer-events: none;
`

export const TitleContainer = styled.div`
  width: 100%;
  height: max-content;
  max-height: 40px;
  margin: 1px 0;
`

export const  Title = styled.p`
  line-height: 1.4;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  white-space: normal;
`
