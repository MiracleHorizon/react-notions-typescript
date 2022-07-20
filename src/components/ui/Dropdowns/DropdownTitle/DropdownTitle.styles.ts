import styled from 'styled-components'

export const TitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 8px;
  border-radius: 3px;

  :focus-visible {
    box-shadow: rgb(46 170 220 / 70%) 0 0 0 1px inset,
      rgb(46 170 220 / 40%) 0 0 0 2px !important;
  }

  svg {
    margin-top: 3px;
  }
`
export const Title = styled.span`
  cursor: pointer;
  font-size: 14px;
  line-height: 21px;
  color: rgba(55, 53, 47, 0.65);
`
