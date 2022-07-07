import { AnyAction } from '@reduxjs/toolkit'
import { toggleFullWidth, toggleSmallText } from 'redux/workSpaceSlice/slice'

interface IToggleOption {
  id: number
  title: string
  isActive: boolean
  toggleIsActive: (id: number) => AnyAction
}

interface Params {
  id: number
  isSmallText: boolean
  isFullWidth: boolean
}

const toggleOptionsHandler = (params: Params): IToggleOption[] => {
  const { id, isSmallText, isFullWidth } = params

  return [
    {
      id: id,
      title: 'Small text',
      isActive: isSmallText,
      toggleIsActive: toggleSmallText,
    },
    {
      id: id,
      title: 'Full width',
      isActive: isFullWidth,
      toggleIsActive: toggleFullWidth,
    },
  ]
}

export default toggleOptionsHandler
export type { IToggleOption }
