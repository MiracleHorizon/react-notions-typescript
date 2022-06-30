import styled from 'styled-components'

const Panel = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  user-select: none;
`

const OptionsList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const Option = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  height: 27px;
  border-radius: 3px;
  margin: 0 4px;

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const Title = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(55, 53, 47, 0.65);
`

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 15px;
  border-radius: 3px;
  opacity: 0.5;
`

export { Panel, OptionsList, Option, Title, Icon }
