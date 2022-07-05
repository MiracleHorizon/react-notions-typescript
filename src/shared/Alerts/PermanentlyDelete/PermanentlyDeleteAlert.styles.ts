import styled from 'styled-components'

const AlertInset = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(15, 15, 15, 0.6);
`

const AlertWrapper = styled.div`
  position: relative;
  top: 40%;
  margin: 0 auto;
  min-width: 300px;
  max-width: 350px;
  padding: 25px 20px;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 5px 10px,
    rgb(15 15 15 / 20%) 0 15px 40px;
  background: white;
  z-index: 1;
`

const ButtonsList = styled.ul`
  margin: 0 10px 5px 10px;
`

const TitleContainer = styled.div`
  min-height: 64px;
  text-align: left;
  padding: 10px;
`

const StyledTitle = styled.p`
  font-size: 16px;
  user-select: none;
`

export { AlertInset, AlertWrapper, ButtonsList, TitleContainer, StyledTitle }
