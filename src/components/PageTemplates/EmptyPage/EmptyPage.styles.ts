import styled from 'styled-components'

const EmptyPageWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  margin-top: 30px;
`

const DescriptionContainer = styled.div`
  margin-bottom: 15px;
`

const Description = styled.p`
  font-size: 16px;
  color: rgba(55, 53, 47, 0.5);
`

const TemplatesTitleContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
`

const StyledTitle = styled.h5`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(55, 53, 47, 0.5);
  user-select: none;
`

export {
  EmptyPageWrapper,
  DescriptionContainer,
  Description,
  TemplatesTitleContainer,
  StyledTitle,
}
