import React from 'react'

import Props from './ChangeDecorNavbar.types'
import ChangeDecorNavbarItem from './ChangeDecorNavbarItem'
import AddRandomDecorButton from 'shared/Buttons/ChangeDecorAction/components/AddRandomDecor'
import RemoveDecorButton from 'shared/Buttons/ChangeDecorAction/components/RemoveDecor'
import { NavbarWrapper, ActionsContainer } from './ChangeDecorNavbar.styles'

const ChangeDecorPopupNavbar: React.FC<Props> = props => {
  const { categories, purpose } = props

  return (
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
  )
}

export default ChangeDecorPopupNavbar
