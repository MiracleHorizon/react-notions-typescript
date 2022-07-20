import React, { FC, memo } from 'react'

import Props from './MoveToOptionItem.types'
import { Themes } from 'types'
import { Separator } from 'components/ui'
import { MoveToSvg } from 'components/ui/SVG'
import PopupOptionItem from 'components/shared/Options/PopupOptionItem'

const MoveToOptionItem: FC<Props> = memo(props => {
  const { action, activeItem, onSelect } = props

  return (
    <>
      <PopupOptionItem
        title='Move to'
        icon={<MoveToSvg theme={Themes.LIGHT} />}
        action={action}
        activeItem={activeItem}
        onSelect={onSelect}
      />
      <Separator />
    </>
  )
})

export default MoveToOptionItem
