import React from 'react'
import ToggleOptionItem from './ToggleOptionItem'
import { ToggleOption } from '../../utils/helpers/toggleOptionsHandler'

interface ToggleOptionsProps {
  options: ToggleOption[]
}

const ToggleOptionsList: React.FC<ToggleOptionsProps> = ({ options }) => {
  return (
    <div>
      {options.map(({ id, title, isActive, toggleIsActive }) => (
        <ToggleOptionItem
          key={title}
          id={id}
          title={title}
          isActive={isActive}
          toggleIsActive={toggleIsActive}
        />
      ))}
    </div>
  )
}

export default ToggleOptionsList
