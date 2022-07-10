import styled from 'styled-components'

const StyledContainer = styled.div`
  cursor: pointer;
  margin-right: 5px;
  border-radius: 3px;
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

const TitleContainer = styled.div`
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

const FilterTitle = styled.span`
  font-size: 14px;
  line-height: 21px;
  color: rgba(55, 53, 47, 0.65);
`

const FilterDropdown = styled.div`
  position: absolute;
  top: 85px;
  right: 10px;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  padding: 6px 5px;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  background: white;
  overflow: hidden;
  z-index: 1000;
`

export { StyledContainer, TitleContainer, FilterTitle, FilterDropdown }
