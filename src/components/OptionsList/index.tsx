import React, { Fragment } from 'react'
import OptionItem from './OptionItem'
import Separator from '../../shared/Separator'
import { IOptionItem } from '../../redux/optionsSlice/types'

interface OptionsListProps {
  options: IOptionItem[]
  className?: string
}

const OptionsList: React.FC<OptionsListProps> = ({ options, className }) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default OptionsList
