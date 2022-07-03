import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  h5,
  p {
    font-size: 14px;
    color: rgba(55, 53, 47, 0.65);
  }
`

const Title = styled.h5`
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 7px;
`

const Description = styled.p`
  width: 200px;
  font-weight: 400;
  text-align: center;
`

export { StyledContainer, Title, Description }
