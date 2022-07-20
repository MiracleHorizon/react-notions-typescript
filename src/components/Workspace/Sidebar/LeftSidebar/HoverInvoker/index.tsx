import React, { FC } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { leftSidebarStateSelector } from 'redux/reducers/sidebarsSlice/selectors'
import { setIsLeftSidebarBubbling } from 'redux/reducers/sidebarsSlice/slice'
import { Invoker } from './SidebarHoverInvoker.styles'

const SidebarHoverInvoker: FC = () => {
  const { isBubbling, isOpen } = useSelector(leftSidebarStateSelector)
  const dispatch = useDispatch()

  const onMouseEnter = (): void => {
    // dispatch(setIsLeftSidebarBubbling(true))
  }

  return <Invoker onMouseEnter={onMouseEnter} />
}

export default SidebarHoverInvoker
