import React from 'react'
import { IOptionItem } from '../../../redux/optionsSlice/types'
import classNameHandler from '../../../utils/helpers/optionItemClassNameHandler'

interface OptionItemProps {
  option: IOptionItem
  className?: string
}

const OptionItem: React.FC<OptionItemProps> = ({ option, className }) => {
  return (
    <div className={classNameHandler(className)}>
      <img src={option.imgUrl} alt='Option' />
      <span>{option.title}</span>
    </div>
  )
}

export default OptionItem
