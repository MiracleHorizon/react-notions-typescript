import styled from 'styled-components'

const Container = styled.div`
  position: absolute; // fixed
  top: 25px;
  left: 0;
  display: inline-flex;
  padding: 3px 5px;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 2px 4px;
  background: white;
  z-index: 1000;

  p,
  span {
    color: rgba(55, 53, 47, 0.65);
    font-weight: 400;
  }
`

const TitleContainer = styled.p`
  font-size: 12px;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
`

const DateTitle = styled.span`
  margin-right: 3px;
`

const TimeTitle = styled.span`
  margin-left: 3px;
`

export { Container, TitleContainer, DateTitle, TimeTitle }
