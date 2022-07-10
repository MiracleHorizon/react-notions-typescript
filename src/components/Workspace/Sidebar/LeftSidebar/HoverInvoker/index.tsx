import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { leftSidebarSelector } from 'redux/sidebarsSlice/selectors'
import { setLeftSidebarIsBubbling } from 'redux/sidebarsSlice/slice'
import { Invoker } from './SidebarHoverInvoker.styles'

const SidebarHoverInvoker: React.FC = () => {
  const { isBubbling, isOpen } = useSelector(leftSidebarSelector)
  const dispatch = useDispatch()

  const onMouseEnter = (): void => {
    // dispatch(setLeftSidebarIsBubbling(true))
  }

  return <Invoker onMouseEnter={onMouseEnter} />
}

export default SidebarHoverInvoker
