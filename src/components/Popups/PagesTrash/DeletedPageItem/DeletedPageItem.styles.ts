import styled from 'styled-components'

const StyledItem = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 28px;
  height: 100%;
  max-height: 45px;
  border-radius: 3px;
  margin: 0 4px;
  padding-left: 15px;
  background: ${props => props.isActive && 'rgba(55, 53, 47, 0.08)'};
  user-select: none;
  transition: background 50ms ease-in-out;

  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

const TitlesBlock = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
  padding: 2px 0;

  span {
    font-weight: 400;
    line-height: 21px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Title = styled.span`
  font-size: 14px;
`

const ParentTitle = styled.span`
  font-size: 12px;
  color: rgba(55, 53, 47, 0.5);
`

const Icon = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  object-fit: cover;
`

const ButtonsContainer = styled.div`
  flex: 0 0 auto;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 15px;
`

const StyledButton = styled.div<{ transparent?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50px;
  min-width: 34px;
  height: calc(100% - 4px);
  border-radius: 3px;
  margin: 0 1px;
  transition: background 50ms ease-in-out;

  svg {
    opacity: ${props => (props.transparent ? 0.6 : 1)};
  }

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export {
  StyledItem,
  TitlesBlock,
  Title,
  ParentTitle,
  Icon,
  ButtonsContainer,
  StyledButton,
}
