import styled from 'styled-components'

const Panel = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  margin-top: auto;
  padding: 5px 10px;
  box-shadow: rgb(55 53 47 / 9%) 0 -1px 0;
  background: rgb(247, 246, 243);
  user-select: none;

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const Button = styled.div`
  cursor: pointer;
  display: flex;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  opacity: 0.5;
`

const Title = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: rgba(55, 53, 47, 0.65);
`

export { Panel, Button, Icon, Title }
