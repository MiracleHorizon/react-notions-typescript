import styled from 'styled-components'

const Container = styled.div<{ isActive: boolean }>`
  position: fixed;
  margin-left: auto;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 170px;
  padding: 3px 10px;
  border-radius: 3px;
  background: rgb(15, 15, 15);
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 5px 10px,
    rgb(15 15 15 / 20%) 0 15px 40px;
  user-select: none;
  transform: translateY(${props => (props.isActive ? '-45px' : '35px')});
  transition: all 0.5s ease-in-out;
  z-index: 2000;

  span {
    color: rgba(255, 255, 255, 0.9);
  }
`

const TitleContainer = styled.div`
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

export { Container, TitleContainer, Title, UndoButtonContainer, UndoTitle }
