import React from 'react'
import OptionItem from './OptionItem'
import Separator from '../../shared/Separator'
import { IOptionItem } from '../../redux/optionsSlice/types'

interface OptionsListProps {
  options: IOptionItem[]
  className?: string
}

const OptionsList: React.FC<OptionsListProps> = ({ options, className }) => {
  return (
    <React.Fragment>
      <div>
        {options.map(option => (
          <OptionItem
            key={option.title}
            option={option}
            className={className}
          />
        ))}
      </div>
      <Separator />
    </React.Fragment>
  )
}

export default OptionsList
