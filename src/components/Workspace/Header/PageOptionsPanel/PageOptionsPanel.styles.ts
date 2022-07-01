import styled from 'styled-components'

const StyledPanel = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 5px;
`

const ShareTitle = styled.span`
  font-size: 14px;
  line-height: 21px;
  color: rgb(55, 53, 47);
`

const OptionButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 28px;
  margin: 0 1px;
  padding: 4px 8px;
  border-radius: 3px;

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const OptionIcon = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0.8;
`

export { StyledPanel, ShareTitle, OptionButton, OptionIcon }
