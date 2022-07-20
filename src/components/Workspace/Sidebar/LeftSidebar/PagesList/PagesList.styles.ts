import styled from 'styled-components'

export const ListWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  margin-top: 10px;
  margin-bottom: ${props => (props.isOpen ? '20px' : '0px')};
`

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const List = styled.ul`
  flex: 1;
`

export const SkeletonContainer = styled.div`
  position: relative;
  left: 0;
  top: 5px;
  width: 100%;
  height: 100%;
`
