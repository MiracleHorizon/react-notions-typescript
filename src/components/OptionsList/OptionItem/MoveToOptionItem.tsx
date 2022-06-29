import React, { Fragment } from 'react'
import OptionItem from './index'
import Separator from '../../../shared/Separator'
import moveToSvg from '../../../assets/img/optionsImgs/moveTo.svg'

const MoveToOptionItem: React.FC = () => {
  return (
    <Fragment>
      <OptionItem
        option={{ title: 'MoveTo', imgUrl: moveToSvg }}
        className='workspace'
      />
      <Separator />
    </Fragment>
  )
}

export default MoveToOptionItem
