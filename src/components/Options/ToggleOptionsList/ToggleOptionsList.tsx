import React from 'react'

import ToggleOptionItem from './ToggleOptionItem/ToggleOptionItem'
import { IToggleOption } from 'utils/helpers/toggleOptionsHandler'
import { ActiveListItem } from '../../../@types/generalTypes'

interface ToggleOptionsProps extends ActiveListItem {
  options: IToggleOption[]
}

const ToggleOptionsList: React.FC<ToggleOptionsProps> = props => {
  const { options, activeItem, onSelect } = props

  return (
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
  )
}

export default ToggleOptionsList
