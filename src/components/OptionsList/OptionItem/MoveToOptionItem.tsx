import React from 'react'
import OptionItem from './index'
import moveToSvg from '../../../assets/img/optionsImgs/moveTo.svg'
import Separator from '../../../shared/Separator'

const MoveToOptionItem: React.FC = () => {
  return (
    <React.Fragment>
      <OptionItem
        option={{ title: 'MoveTo', imgUrl: moveToSvg }}
        className={'workspace'}
      />
      <Separator />
    </React.Fragment>
  )
}

export default MoveToOptionItem
