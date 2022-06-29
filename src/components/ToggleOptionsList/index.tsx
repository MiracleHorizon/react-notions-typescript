import React from 'react'
import ToggleOptionItem from './ToggleOptionItem'
import { ToggleOption } from '../../utils/helpers/toggleOptionsHandler'

interface ToggleOptionsProps {
  options: ToggleOption[]
  activeItem: string
  onSelect: (title: string) => void
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
