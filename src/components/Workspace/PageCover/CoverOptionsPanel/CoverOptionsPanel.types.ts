import { Dispatch, SetStateAction } from 'react'

export default interface CoverOptionsPanelProps {
  isHovering: boolean
  isRepositionEnabled: boolean
  setRepositionEnabled: Dispatch<SetStateAction<boolean>>
}

export interface StyledOptionProps {
  borderRight?: boolean
  position: 'Left' | 'Right'
}
