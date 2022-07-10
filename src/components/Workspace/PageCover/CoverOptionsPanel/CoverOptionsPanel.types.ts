import { Dispatch, SetStateAction } from 'react'

export default interface CoverOptionsPanelProps {
  isHovering: boolean
  isRepositionEnabled: boolean
  setRepositionEnabled: Dispatch<SetStateAction<boolean>>
}

interface StyledOptionProps {
  borderRight?: boolean
  position: 'left' | 'right'
}

export type { StyledOptionProps }
