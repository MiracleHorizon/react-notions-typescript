import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import PopupOptionItem from '../../PopupOptionItem'
import Separator from 'shared/Separator'
import MoveToSVG from 'shared/SVG/MoveTo'
import { openMovePageToModal } from 'redux/modalsSlice/slice'
import { ActiveListItem, Themes } from '../../../../@types/generalTypes'

const MoveToOptionItem: React.FC<ActiveListItem> = props => {
  const { activeItem, onSelect } = props
  const dispatch = useDispatch()

  const onOpenMovePageToModal = (): void => {
    dispatch(openMovePageToModal())
  }

  return (
    <Fragment>
      <PopupOptionItem
        title='Move to'
        icon={<MoveToSVG theme={Themes.LIGHT} />}
        action={onOpenMovePageToModal}
        activeItem={activeItem}
        onSelect={onSelect}
      />
      <Separator />
    </Fragment>
  )
}

export default MoveToOptionItem
