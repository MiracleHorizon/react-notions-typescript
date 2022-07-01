import React, { Fragment } from 'react'
import OptionItem from './index'
import Separator from '../../../../shared/Separator'
import moveToSvg from '../../../../assets/img/optionsImgs/moveTo.svg'

interface MoveToOptionItemProps {
  activeItem?: string
  onSelect?: (title: string) => void
}

const MoveToOptionItem: React.FC<MoveToOptionItemProps> = props => {
  const { activeItem, onSelect } = props

  return (
    <Fragment>
      <OptionItem
        option={{ title: 'MoveTo', imgUrl: moveToSvg }}
        activeItem={activeItem}
        onSelect={onSelect}
        className='workspace'
      />
      <Separator />
    </Fragment>
  )
}

export default MoveToOptionItem
