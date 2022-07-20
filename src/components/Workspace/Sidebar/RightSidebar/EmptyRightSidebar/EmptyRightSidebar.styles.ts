import styled from 'styled-components'

export const StyledContainer = styled.div`
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

export const Title = styled.h5`
  margin-top: 10px;
  margin-bottom: 7px;
  font-weight: 600;
`

export const Description = styled.p`
  width: 200px;
  font-weight: 400;
  text-align: center;
`
