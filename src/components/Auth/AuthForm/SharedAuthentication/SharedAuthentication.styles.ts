import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 320px;
  margin-bottom: 15px;
`

export const AppTitleContainer = styled.div`
  position: relative;
  align-self: flex-start;
  margin-left: 30px;
  margin-bottom: 30px;
`

export const AppTitle = styled.h1`
  font-size: 21px;
  font-weight: 500;
`

export const AuthDescription = styled.p`
  margin-top: 3px;
  font-size: 17px;
`

export const AppImage = styled.img`
  position: absolute;
  top: 10px;
  left: -80px;
  width: 55px;
  min-width: 55px;
  height: 55px;
  min-height: 55px;
`

export const AuthsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    height: 36px;
    margin-bottom: 5px;
    box-shadow: rgb(15 15 15 / 5%) 0 1px 2px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    color: rgb(55, 53, 47);
  }
`
