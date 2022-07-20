import React, { FC, memo } from 'react'

import ChangeDecorNavbarItem from './ChangeDecorNavbarItem'
import { AddRandomDecorButton, RemoveDecorButton } from 'components/ui'

import Props from './ChangeDecorNavbar.types'
import { NavbarWrapper, ActionsContainer } from './ChangeDecorNavbar.styles'

const ChangeDecorPopupNavbar: FC<Props> = memo(({ categories, purpose }) => (
  <NavbarWrapper>
    {categories.map(category => (
      <ChangeDecorNavbarItem
        key={category}
        category={category}
        purpose={purpose}
      />
    ))}
    <ActionsContainer>
      <AddRandomDecorButton purpose={purpose} />
      <RemoveDecorButton purpose={purpose} />
    </ActionsContainer>
  </NavbarWrapper>
))

export default ChangeDecorPopupNavbar
