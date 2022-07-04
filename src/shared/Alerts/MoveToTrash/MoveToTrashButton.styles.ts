import styled from 'styled-components'

const StyledContainer = styled.div<{ isActive: boolean }>`
  position: absolute;
  bottom: 100px;
  left: 50%;
  right: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 170px;
  padding: 3px 10px;
  border-radius: 3px;
  background: rgb(15, 15, 15);
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 5px 10px,
    rgb(15 15 15 / 20%) 0 15px 40px;
  z-index: 100;
  ${props => props.isActive && 'transform: translateY(-200px)'};

  span {
    color: rgba(255, 255, 255, 0.9);
  }
`

const TitleBlock = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: row;
`

const Title = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
`

const UndoButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
  padding: 3px;
`

const UndoTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
`

export { StyledContainer, TitleBlock, Title, UndoButtonContainer, UndoTitle }
