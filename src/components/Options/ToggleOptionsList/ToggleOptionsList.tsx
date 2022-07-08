import React from 'react'

import ToggleOptionItem from './ToggleOptionItem/ToggleOptionItem'
import Separator from 'shared/Separator'
import { IToggleOption } from 'helpers/toggleOptionsHandler'
import { ActiveListItem } from '../../../types'

interface ToggleOptionsProps extends ActiveListItem {
  options: IToggleOption[]
}

const ToggleOptionsList: React.FC<ToggleOptionsProps> = props => {
  const { options, activeItem, onSelect } = props

  return (
    <>
      <Separator />
      <div>
        {options.map(option => (
          <ToggleOptionItem
            key={option.title}
            option={option}
            activeItem={activeItem}
            onSelect={onSelect}
          />
        ))}
      </div>
      <Separator />
    </>
  )
}

export default ToggleOptionsList
