import React, { FC } from 'react'
import { Footer, HotkeysList, Hotkey, Icon, Title } from './HotkeysBar.styles'

const HotkeysBar: FC = () => (
  <Footer>
    <HotkeysList>
      <Hotkey>
        <Icon>↑↓</Icon>
        <Title>Select</Title>
      </Hotkey>
      <Hotkey>
        <Icon>↵</Icon>
        <Title>Open</Title>
      </Hotkey>
    </HotkeysList>
  </Footer>
)

export default HotkeysBar
