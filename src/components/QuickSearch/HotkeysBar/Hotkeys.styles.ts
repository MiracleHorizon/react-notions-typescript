import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 7px;
  padding: 7px;
  box-shadow: rgb(55 53 47 / 9%) 0 -1px 0;
  user-select: none;
`

const HotkeysList = styled.ul`
  display: inline-flex;
  justify-content: flex-start;
`

const Hotkey = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 0 5px;
`

const Icon = styled.span`
  color: rgba(55, 53, 47, 0.5);
`

const Title = styled.span`
  margin-left: 5px;
  font-size: 12px;
  color: rgba(55, 53, 47, 0.5);
`

export { Footer, HotkeysList, Hotkey, Icon, Title }
