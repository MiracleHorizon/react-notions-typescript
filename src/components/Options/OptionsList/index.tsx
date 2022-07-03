import React, { Fragment } from 'react'
import OptionItem from './OptionItem'
import Separator from 'shared/Separator'
import { IOptionItem } from 'redux/optionsSlice/types'

interface OptionsListProps {
  options: IOptionItem[]
  activeItem?: string
  onSelect?: (title: string) => void
  className?: string
}

const OptionsList: React.FC<OptionsListProps> = props => {
  const { options, activeItem, onSelect, className } = props

  return (
    <Fragment>
      <div>
        {options.map(option => (
          <OptionItem
            key={option.title}
            option={option}
            activeItem={activeItem}
            onSelect={onSelect}
            className={className}
          />
        ))}
      </div>
      <Separator />
    </Fragment>
  )
}

export default OptionsList
