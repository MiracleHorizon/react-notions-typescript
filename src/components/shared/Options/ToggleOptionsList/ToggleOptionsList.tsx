import React, { FC, memo } from 'react'

import ToggleFullWidthOption from './ToggleOptionItem/components/ToggleFullWidth'
import ToggleSmallTextOption from './ToggleOptionItem/components/ToggleSmallText'
import { Separator } from 'components/ui'

import { ActiveListItem } from 'types'

const ToggleOptionsList: FC<ActiveListItem> = memo(props => {
  return (
    <>
      <Separator />
      <ToggleFullWidthOption {...props} />
      <ToggleSmallTextOption {...props} />
      <Separator />
    </>
  )
})

export default ToggleOptionsList
