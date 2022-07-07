import React from 'react'

import PopupOptionItem from 'components/Options/PopupOptionItem'
import Separator from 'shared/Separator'
import MoveToSVG from 'shared/SVG/MoveTo'
import Props from './MoveToOptionItem.types'
import { Themes } from '../../../../../../@types/generalTypes'

const MoveToOptionItem: React.FC<Props> = props => {
  const { action, activeItem, onSelect } = props

  return (
    <>
      <PopupOptionItem
        title='Move to'
        icon={<MoveToSVG theme={Themes.LIGHT} />}
        action={action}
        activeItem={activeItem}
        onSelect={onSelect}
      />
      <Separator />
    </>
  )
}

export default MoveToOptionItem
